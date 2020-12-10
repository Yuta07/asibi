---
title: 'AmplifyでNext.jsをホスティングしてAccess Deniedになるエラーを解決する。'
spoiler: 'Amplify コンソール Rewrite, Redirect を変更する。'
quickword: '動的ルーティングと404ページに対応する🔥'
date: '2020-12-10'
image: '/blog/next-amplify-hosting/slution-laugh.svg'
---

## 背景

Amplify で Next.js の開発をしていて、 `amplify add hosting` でデプロイまで上手くいっているにも関わらず、存在しない URL に遷移した場合に期待しているカスタム 404 ページでなく、403 `Access Denied` に飛んだしまう事象が生じていました。

また `post/[id]` のような動的ルーティングのページでブラウザを更新すると、同様の問題が生じていました。

## 対処法

Next.js の問題ではなく、 `Amplify コンソール` の 「書き換えて、リダイレクト」でリダイレクトの設定をする必要がありました。

例えば、pages フォルダに下記ファイルが用意されているとします。

- index.tsx
- plans/index.tsx
- plans/[id].tsx

この場合、 `Amplify コンソール` でこのように設定する必要があります。

![amplify-rewrite_redirect](/blog/next-amplify-hosting/amplify-rewrite_redirect.svg)

設定していない場合は先述したとおり、 `/abc` のような存在しないページに遷移した時や `plans/abc` のようなページで更新をした時に `Access Denied` が表示されます。

しっかりと対応することで、想定通りのルーティングを実現できるようになりました。

## まとめ

Amplify を用いた Next.js に関する記事はまだ数が少なく、根気強く調べる必要があると感じました。

2020/09 に Amplify がサーバー側レンダリング (SSR) を Next.js や Nuxt.js などのフレームワークに組み込むことができるようになりましたが、
2020/12/10 現在、[Amplify Next.js hosting](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js#kicking-off-a-new-build)に

> Next also supports pre-rendering for dynamic server-rendered routes. At this time, Amplify does not support the hosting of dynamic server-rendered routes with Next.

とあるように動的ルーティングをサポートしていないと記載されているため、 `Amplify コンソール` での設定が必要になるかもしれません。

## 参考サイト

- [Developers.IO](https://dev.classmethod.jp/articles/amplify-javascript-adds-server-side-rendering-support-frameworks-next-js-nuxt-js/)
- [Amplify Next.js Tutorial](https://docs.amplify.aws/start/getting-started/installation/q/integration/next)
