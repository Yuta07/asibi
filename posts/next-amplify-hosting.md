---
title: 'AmplifyでNext.jsをホスティングしてAccess Deniedになるエラーを解決する。'
preface: 'Amplify コンソール Rewrite, Redirect を変更する🔥'
createdAt: '2020-12-10'
updatedAt: '2021-09-01'
category: 'tech'
tags: ['Next.js', 'Amplify']
---

## 背景

Amplify で Next.js の開発をしていて、 `amplify add hosting` でデプロイまで上手くいっているにも関わらず、存在しない URL に遷移した場合にカスタム 404 ページでなく、403 `Access Denied` に飛んでしまう事象が発生。

また `users/[id]/dashboard` のような動的ルーティングのページでブラウザを更新しても同様の事象が発生。

## Amplify の設定を変更して対応

Amplify の 「書き換えて、リダイレクト」でリダイレクトの設定をする必要がありました。

例えば、pages フォルダに下記ファイルが用意されているとします。

- users/index.tsx
- users/[id].tsx
- users/[id]/dashboard.tsx

最初は Amplify のドキュメント [Amplify Dynamic routes](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/#dynamic-routes)を参考にしていて、下記のように設定をしていたのですが`Access Denied` になってしまうようでした。

![pre_amplify-rewrite_redirect.png](/blog/next-amplify-hosting/pre_amplify-rewrite_redirect.png)

色々調べた結果、AWS の公式ドキュメント[Query strings and path parameters](https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/redirects.html#query-strings-and-path-parameters)によると、Amplify コンソールにて下記のように設定する必要があるようです。

![amplify-rewrite_redirect](/blog/next-amplify-hosting/amplify-rewrite_redirect.png)

これで、動的ルーティングの場合でも期待通りのルーティングをするようになるかと思います。
送信元アドレスのクエリ文字列と一致するフォルダにパスを通すみたいです。

注意点として、「書き換えて、リダイレクト」では上からマッチした順に結果が反映されることになるので注意が必要です。

今回の場合だと、 `users/[id].tsx` は `users/[id]/dashboard.tsx` の下に追加する必要があります。

また、`404` ページは一番下に追加することを忘れないようにしましょう。

## 参考サイト

- [AWS Amplify Using redirects](https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/redirects.html)
