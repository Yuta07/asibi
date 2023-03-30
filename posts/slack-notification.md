---
title: 'JavaScript（TS）で外部ソースからslackに通知する'
preface: 'slack の Incoming Webhook で外部ソースからの情報を簡単にワークスペースと共有する'
createdAt: '2022-05-27'
eyecatch: '/blog/slack-notification/envelope_3d.png'
tags: ['Slack']
isDraft: false
---

今回の記事では slack への通知を実現するために Incoming Webhook という App を使用します。
ワークフロービルダーを利用して行うこともできますが、有料プランである必要があるようなので Incoming Webhook を使用します。

通知を飛ばせるようにするためのフローは以下になります。

1. 通知を飛ばしたいチャンネルで Incoming Webhook を追加
2. Incoming Webhook から Webhook URL を取得
3. Webhook URL に外部サービスから JSON ペイロードとして送信

1 つずつ順を追って説明していきます。

## 1. 通知を飛ばしたいチャンネルで Incoming Webhook を追加

slack のサイドバーの App もしくはチャンネルメニューのインテグレーションからアプリを追加するを選択します。
すると、slack app directory に遷移するので、そこで Incoming Webhook を slack に追加します。

## 2. Incoming Webhook から Webhook URL を取得

追加すると Incoming Webhook の詳細に移るので、そこで通知先にしたいチャンネルを選択します。

![Incoming_webhook.png](/blog/slack-notification/incoming_webhook_detail.png)

選択するとさらに詳細が表示されて、下にスクロールすると `https://hooks.slack.com/services/` から始まるリクエスト用の URL が存在するはずです。
その Webhook URL を使用して外部サービスから JSON として通知を飛ばせるようになります。

もし URL の再生成をする必要がある場合は slack app directory の Incoming Webhook にて Webhook URL の再生成が可能です。

## 3. Webhook URL に外部サービスから JSON ペイロードとして送信

2 で取得した Webhook URL を使用して POST で JSON を送信します。

[Creating rich message layouts](https://api.slack.com/messaging/composing/layouts)を参考にすればメッセージのレイアウトを作成することもできますが、プレビューを見ながらメッセージの JSON データを作成できる
[Block Kit Builder](https://app.slack.com/block-kit-builder/)を使用すれば簡単にメッセージを生成できます。

slack に通知するメッセージの雛形を作成した後は Webhook URL に `POST` するだけです。

`YOUR_SLACK_WEBHOOK_URL` には取得した `Webhook URL` を指定してください。

```tsx
const handleSubmitSlackNotification = async () => {
  await fetch(`https://hooks.slack.com/services/${YOUR_SLACK_WEBHOOK_URL}`, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'これがヘッダー🎉'
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `左タイトル:\n*foo bar*`
            },
            {
              type: 'mrkdwn',
              text: `右タイトル:\n*baz baz*`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'リンクボタンテキスト'
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'リンクを覗く',
              emoji: true
            },
            value: 'click_link',
            url: `https://asibi.dev`,
            action_id: 'button-action'
          }
        }
      ]
    })
  })
}
```

すると通知が来るように設定したチャンネルでは下記画像のようなメッセージがきます。

![notification_actually.png](/blog/slack-notification/notification_actually.png)

これでアプリを追加・URL の取得・JSON として送信するだけで簡単に通知を飛ばすことが実現できました。

## まとめ

今回は POST メソッドで実装していますが、[node-slack-sdk](https://github.com/slackapi/node-slack-sdk)を使用する方法や Next.js であれば Serverless Functions を使用するような方法もあります。

また、有料プランのみではありますがワークフロービルダーを使用することで通知だけではなく、タスクの簡易化・自動化を図ることもできますので業務効率化にも繋がりそうです。

### 参考にしたサイト

- [Slack での Incoming Webhook の利用](https://slack.com/intl/ja-jp/help/articles/115005265063-Slack-%E3%81%A7%E3%81%AE-Incoming-Webhook-%E3%81%AE%E5%88%A9%E7%94%A8)
- [Sending messages using Incoming Webhooks](https://api.slack.com/messaging/webhooks#posting_with_webhooks)
- [Creating rich message layouts](https://api.slack.com/messaging/composing/layouts)
