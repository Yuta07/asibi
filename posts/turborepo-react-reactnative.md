---
title: 'TurborepoではじめるReact開発'
preface: 'Turborepoを使用したmonorepoでReactプロジェクトを動かしてuiコンポーネントを呼び出すまで'
createdAt: '2022-11-01'
eyecatch: '/blog/turborepo-react-reactnative/yo-yo_3d.png'
category: 'tech'
tags: ['React', 'React Native', 'Turborepo']
---

## Turborepo とは

Vercel による 1 つのコードベースで複数のアプリやパッケージを管理する monorepo 環境のためのビルドツールで、ワークスペースという手法で個々にパッケージを依存させたり相互依存させます。

特徴として、タスクの結果とログをキャッシュすることで遅いタスクの速度を向上させることができます。例えばビルドコマンドを叩いても、変更を加えていない箇所のビルドはスキップされるといったことです。

https://turbo.build/

## monorepo プロジェクトの作成

```zsh
npx create-turbo@latest
```

このコマンドを叩くだけで monorepo プロジェクトの作成が可能です。プロジェクト名は途中で聞かれるのでそこで入力します。
既存のプロジェクトに導入したい場合は、[こちら](https://turbo.build/repo/docs/getting-started/add-to-project)を参照してください。

プロジェクトを作成するとこのようなディレクトリ構成になっているかと思います。(プロジェクト作成後のターミナルでも説明されています。)

```text
- apps
  - docs // Next.jsプロジェクト
  - web // Next.jsプロジェクト
- packages
  - eslint-config-custom // 共通のESLint設定
  - tsconfig // 共通のtsconfig
  - ui React // コンポーネントライブラリ
```

それぞれの `package.json` の名前をもとに確認していくと、どのパッケージに依存しているのかわかります。

```json
// /apps/web/package.json
"dependencies": {
  "next": "13.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "ui": "*" // ここ
},
"devDependencies": {
  "@babel/core": "^7.0.0",
  "eslint": "7.32.0",
  "eslint-config-custom": "*", // ここ
  "tsconfig": "*", // ここ
  "@types/node": "^17.0.12",
  "@types/react": "^18.0.22",
  "@types/react-dom": "^18.0.7",
  "typescript": "^4.5.3"
}
```

- docs => ui / eslint-config-custom / tsconfig に依存
- web => ui / eslint-config-custom / tsconfig に依存
- ui => eslint-config-custom / tsconfig に依存

今回は `apps` 内に `react` と `react-native` プロジェクトを加えていきます。
他のワークスペースを指定することも可能ですが、公式ドキュメントにおいて `apps` `packages` を持つことを推奨されているため、これに従います。

[Turborepo - Configuring workspaces](https://turbo.build/repo/docs/handbook/workspaces#configuring-workspaces)

他のワークスペースを作成して、そこに新規プロジェクトを作成したい場合はルートの `package.json` の `workspace` 設定を変更する必要があります。

```
"workspaces": [
  "apps/*",
  "packages/*"
],
```

## React プロジェクトを導入

まず React プロジェクトの作成から行います。
ビルドツールには `vite` を使用しています。 `create-react-app` でも問題ありません。

```zsh
npm create vite@latest --workspace=app
```

上記コマンドで `apps` フォルダ内に新しくプロジェクトを作成することができます。React の選択はターミナル内で選択することになります。
またパッケージ名はなんでも構いませんが、今回は `web_react` としています。

`apps` 内にて `npm create vite@latest` を実行しても同様に可能ですがお勧めはできません。
ワークスペースで管理している以上は不要でありますし、ルートディレクトリからパッケージのインストールを実行せずに個々のプロジェクト内でコマンドを叩くといったやり方だと、
思わぬプロジェクトで入れるつもりのないパッケージをインストールしていたなんでことが起こる可能性があるからです。

`web_react` に必要なパッケージをインストールします。 `--workspace=` をつけることで各ワークスペースのみにパッケージのインストールを実行するようにします。

```zsh
npm install --workspace=web_react
```

次は作成できた React プロジェクトの `package.json` に `ui` その他の共通ワークスペースの加えます。

```json
// /apps/react/package.json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "ui": "*"
},
"devDependencies": {
  "@types/react": "^18.0.22",
  "@types/react-dom": "^18.0.7",
  "@vitejs/plugin-react": "^2.2.0",
  "eslint-config-custom": "*",
  "tsconfig": "*",
  "typescript": "^4.6.4",
  "vite": "^3.2.0"
}
```

このまま React プロジェクトをブラウザで立ち上げたいところですが、このまま `npm run dev` を実行すると `web` と `web_react` の 2 つのプロジェクトが立ち上がってしまうため、ルートの `package.json` にそれぞれのワークスペースを立ち上げれるようにスクリプトを加えます。

```json
// /package.json
"scripts": {
  "build": "turbo run build",
  "dev": "turbo run dev --parallel", // parrallelで並行実行す流ようになります
  "dev:web_next": "turbo run dev --filter=web",
  "dev:web_react": "turbo run dev --filter=web_react",
  "lint": "turbo run lint",
  "format": "prettier --write \"**/*.{ts,tsx,md}\""
},
```

`filter` を使用することで各ワークスペースに対してのスクリプトに実行が可能になります。今回は

- `"dev:web_next"` で web のワークスペース
- `"dev:web_react"` で web_react のワークスペース

に対して `dev` を実行するようにしています。
スクリプト実行時の `turbo run <task>` で `turbo.json` の `task` を実行することができます。

ここまでできたら、 `npm run dev:web_react` をすることで `web_react` プロジェクトのみを立ち上げることができるはずです。
また、 `ui` パッケージの `Button` コンポーネントの使用も可能になっているかと思います。

**番外編 ~ create-react-app で作ってみる**
`create-react-app` を利用して `web_cra` というプロジェクトを作成します。

`npm init react-app web_cra --workspace=apps` だとローカルホスト立ち上げで失敗してしまうため、やむなく `apps` ワークスペースからプロジェクト作成を行いました。

```zsh
npx create-react-app web_cra --template typescript // apps ワークスペース内から
```

`web_cra` に `ui` 等のパッケージを追加して、ルートの `package.json` に立ち上げ用のスクリプトの追加をします。

```json
// /apps/web_cra/package.json
"dependencies": {
  // ~~略
  "ui": "*"
},
"devDependencies": {
  "eslint-config-custom": "*",
  "tsconfig": "*"
}
```

```json
// /package.json
"scripts":{
  "dev:web_next": "turbo run dev --filter=web",
  "dev:web_react": "turbo run dev --filter=web_react",
  "dev:web_cra": "turbo run start --filter=web_cra", // ここ
}
```

`crate-react-app` の立ち上げスクリプトが `start` のため、合わせる必要があり `turbo.json` にも `start` タスクを加えなければいけません。

```json
// /turbo.json
{
  {
    // ~~ 略
    "dev": {
      "cache": false
    },
    "start": {
      "cache": false
    }
  }
}
```

さらに `ui` パッケージから `Button` コンポーネントを使用したいのですが、そうするとエラーが生じます。
これは `crate-react-app` では実行時に `typescript` のトランスパイルを行っていないからだと思います。

では、なぜ Next.js と Vite ではエラーが生じなかったかですが、Next.js では `next.config.js` に`transpilePackages: ["ui"]`を追加することでトランスパイルを実行しており、Vite では標準でトランスパイルを行っているからだと考えられます。

```js
// next.config.js
experimental: {
  transpilePackages: ["ui"],
},
```

ただ、この `next.config.js` における設定ですが最近(執筆日時 2022/11/1)加えられたようで、それ以前は `next-transpile-modules` を使用してトランスパイルがされていました。

詳細はそれぞれ下記リンクを一読するといいかもしれません。

- [Support next.js 13 · Issue #280 · martpie/next-transpile-modules](https://github.com/martpie/next-transpile-modules/issues/280)
- [特徴 | Vite - TypeScript](https://ja.vitejs.dev/guide/features.html#typescript)

そのため、 `create-react-app` を使用する場合は別でトランスパイルをする必要があります。

今回は `tsup` というライブラリを使用して、 `ui` パッケージをトランスパイルします。

[こちらの記事](https://dev.to/siddharthvenkatesh/your-first-turborepo-1lo)を参考にしました。

```zsh
npm install tsup --workspace=ui
```

`tsup` をインストールしたら、`ui` に `src` フォルダを作成して、そこにコンポーネントをまとめる形にします。

```
- ui
  - src
    - Button.tsx
    - index.tsx
```

さらに `package.json` を書き換えます。

```json
// /ui/package.json

"name": "ui",
"version": "0.0.0",
"main": "./dist/index.js",
"types": "./dist/index.d.ts",
"license": "MIT",
"scripts": {
  "build": "tsup src/index.tsx --format esm,cjs --dts",
  "dev": "tsup src/index.tsx --format esm,cjs --watch --dts",
  "lint": "TIMING=1 eslint \"**/*.ts*\""
}
```

こうすることでビルド後に `dist` フォルダが作成され、ビルドされたファイルを利用できるようになります。

ただ、ビルドと開発中のコンポーネントの変更が即時反映されるようにルートの `package.json` にもスクリプトを追加しなければなりません。

```json
// /package.json

"scripts": {
  "build": "turbo run build",
  "build:ui": "turbo run build --filter=ui", // uiのビルド
  "dev": "turbo run dev --parallel",
  "dev:web_next": "turbo run dev --filter=web",
  "dev:web_react": "turbo run dev --filter=web_react",
  "dev:ui": "turbo run dev --filter=ui", // uiの変更を検知
  "dev:web_cra": "turbo run start --filter=web_cra",
  "lint": "turbo run lint",
  "format": "prettier --write \"**/*.{ts,tsx,md}\""
},
```

これで `web_cra` でもエラーが起きることなく、ローカルホストを立ち上げることに成功したのではないかと思います。

しかし、必要のない設定やパッケージを追加する必要が生じてしまうため、やむを得ない事情がない限りでは `Vite` を使用することをお勧めします。
