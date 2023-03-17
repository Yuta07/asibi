---
title: 'pnpmはなにが違うのか'
preface: 'yarnからpnpmに移行したのでまとめてみる'
createdAt: '2023-03-11'
eyecatch: '/blog/monorepo-reactnative-forweb/duck_3d.png'
category: 'tech'
tags: ['pnpm']
isDraft: true
---

## pnpm での管理

npm や yarn のような node_modules 直下でフラットにパッケージとその依存を全て管理しています。
一方で、pnpm は シンボリックリンクを利用して node_modules に配置して、 **.pnpm** の中に以下の命名規則で配置されているすべての依存パッケージをフラットに保存しています。

```txt
// これを仮想ストアと呼ぶ
.pnpm/<name>@<version>/node_modules/<name>
```

> シンボリックリンクとは
> ファイルやディレクトリに別名を持たせる特殊なディレクトリエントリである。シンボリックリンクはその内部にひとつのパス名を記憶している。通常の入出力 API を用い、プログラムがシンボリックリンクにアクセスしようとすると、実際にはそこに記憶されているパス名が表す対象へのアクセスが行われる。
> [出典]IPA ISEC 　セキュア・プログラミング講座：C/C++言語編　第 9 章 ファイル対策：シンボリックリンク攻撃対策

デフォルトで pnpm はシンボリックリンクを使用して、プロジェクトの直接の依存関係のみを node_modules 直下に追加します。
依存関係はコンテンツ探索可能なストア **.pnpm store** に格納され、プロジェクトからアクセスできるパッケージは node_modules 以下のパッケージのみとなります。

コンテンツ探索可能なストア（コンテンツストア）とは **.pnpm store** であり、インストールしたパッケージはコンテンツストアの 1 ヶ所からハードリンクされるため、追加のディスク容量を消費することがありません。
1 ヶ所からハードリンクできることにより異なるパッケージからの同じバージョンの依存を共有することが可能となります。

### pnpm の厳格さ

npm や yarn と比べるとアクセスできるパッケージに対する厳格さはかなり高そうです。pnpm のこの厳格さに関して、[こちらの記事](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)で読むことができます。

この記事から、あるパッケージをインストールした結果、その依存関係もインストール、さらには使用可能になることのリスクがよくわかります。
パッケージ A をインストールした際にパッケージ B に依存しているとします。その場合、`node_modules` 直下にパッケージ B が追加されることになり、アプリケーションで使用することが可能になります。
その時使用することができたとしてもパッケージ A が何かしらのアップデートでパッケージ B の依存を削除するとアプリケーションが壊れてしまいます。また、パッケージ B のバージョンが上がった後でパッケージ A をアップデートする場合でも、アプリケーションが壊れる場合があります。それはアプリケーションでのパッケージ B のアップデート以前におけるものだからです。

このようになることを考えると pnpm の厳格さはとても素晴らしいものであ理、インストールしたパッケージのみしか使用できないできない、というものはあるべき姿であるとも思えます。今まで疑問に思わなかったのが不思議なくらいです。

### .pnpm をのぞく

pnpm ドキュメントの例を参考に見てみます。とても簡潔な例となりますが、依存関係が増えてグラフ構造が深くなっても基本的に同じ構造になります。

```txt
node_modules
├── foo -> ./.pnpm/foo@1.0.0/node_modules/foo // プロジェクトからの依存 => プロジェクト上で明示的にインストールしたもの
└── .pnpm
    ├── bar@1.0.0
    │   └── node_modules
    │       ├── bar -> <store>/bar // 自身へのハードリンク => これが実体のファイル
    │       └── qar -> ../../qar@2.0.0/node_modules/qar // 依存しているqarのシンボリックリンク
    └── foo@1.0.0
        └── node_modules
            └── foo -> <store>/foo // 自身へのハードリンク => これが実体のファイル
                ├── index.js
                └── package.json
    │       ├── bar -> ../../bar@1.0.0/node_modules/bar // 依存しているbarのシンボリックリンク
    │       └── qar -> ../../qar@2.0.0/node_modules/qar // 依存しているqarのシンボリックリンク
    └── qar@2.0.0
        └── node_modules
            └── qar -> <store>/qar　// 自身へのハードリンク => これが実体のファイル
```

`foo@1.0.0/node_modules/foo/index.js` が`bar` を 解決したいときは実体ファイルの方の `bar@1.0.0/node_modules/bar` を見て解決することになります。

このように管理されることで、依存関係に含まれるパッケージへのアクセスのみに制御しているようです。仮にパッケージに依存関係が増えてもグラフが深くなるだけであるため、スッと頭に入る構造であると思います。

最後に next の **.pnpm** を確認してみます。

```txt
└── .pnpm
    └── next@13.2.3_6m24vuloj5ihw4zc5lbsktc4fu
        └── node_modules
           └── @next // @next/xxxのシンボリックリンク
                ├── env // @next/env
                └── swc-darwin-x64 // @nextswc-darwin-x64
           └── @swc // @swc/xxxのシンボリックリンク
                └── helpers // // @swc/helpers
           ├── caniuse-lite // caniuse-liteのシンボリックリンク
           ├── next // 自身へのハードリンク
           ├── postcss  // postcssのシンボリックリンク
           ├── react  // reactのシンボリックリンク
           ├── react-dom  // react-domのシンボリックリンク
           └── styled-jsx // styled-jsxのシンボリックリンク
```

さらに next 自体の package.json を見てみます。

```txt
"dependencies": {
    "@next/env": "13.2.3",
    "@swc/helpers": "0.4.14",
    "caniuse-lite": "^1.0.30001406",
    "postcss": "8.4.14",
    "styled-jsx": "5.1.1"
  },
  "peerDependencies": {
    "@opentelemetry/api": "^1.4.0",
    "fibers": ">= 3.1.0",
    "node-sass": "^6.0.0 || ^7.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sass": "^1.3.0"
  },
  "peerDependenciesMeta": {
    "node-sass": {
      "optional": true
    },
    "sass": {
      "optional": true
    },
    "fibers": {
      "optional": true
    },
    "@opentelemetry/api": {
      "optional": true
    }
  },
```

2 つを比べてみると dependencies と optional でない peerDependencies(react と react-dom)をシンボリックリンクとして参照できるようになっているのがわかります。

### おわりに

pnpm のドキュメントは大部分が日本語で翻訳されています。また、pnpm のコマンド自体も npm や yarn で使用していたものと似通ったものがほとんどのため、すぐに雰囲気を掴むことができるはずです。
コマンドで困ったり間違ったパッケージマネージャを指定してしまったりすることが多い場合のための下記のような素晴らしいツールもあります。

[antfu/ni: 💡 Use the right package manager](https://github.com/antfu/ni)

最後まで読んでいただきありがとうございました 👏

### 参考にしたサイト

- [Fast, disk space efficient package manager | pnpm](https://pnpm.io/ja/)
- [pnpm’s strictness helps to avoid silly bugs](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)
