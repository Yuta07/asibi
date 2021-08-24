---
title: 'lambdaトリガーでCognitoカスタムメッセージ'
date: '2020-10-29'
updated: '2021-08-24'
image: '/blog/cognito-custom-message/message_customize.svg'
tag: 'dev'
---

## はじめに

Cognito を通して認証を行なった場合、登録したメールアドレス宛にメールを送信するようになっています。
カスタムメッセージを適用していなくても、下記の 2 通りの場合であれば、Cognito コンソール上の「メッセージのカスタマイズ」からメール内容の変更が可能です。

1. ユーザー招待メッセージ
2. 1 以外

最低限の変更は可能ですが、新規登録とパスワードリセットのイベント時にメールを送信するとなった場合、メールの内容が一緒になってしまいます。

そこで、イベント毎でメールの内容を変更するために lambda トリガーを使用することになります。

## lambda トリガーでどうやるのか

まずは lambda function を作成する必要があります。AWS lambd コンソール上から作成することができます。

また、amplify を使用している場合、CLI から作成することができます。

[Amplify Docs Functions Overview](https://docs.amplify.aws/cli/function#function-templates)

```bash
amplify add function

and

amplify push
```

lambda 関数を作成したあとはカスタムロジックを追加することができます。

```javascript
exports.handler = (event, context, callback) => {
  // Send post authentication data to Cloudwatch logs
  console.log('Authentication successful')
  console.log('Trigger function =', event.triggerSource)
  console.log('User pool = ', event.userPoolId)

  /*
	smsMessage - カスタム SMS メッセージ
	emailMessage - カスタム E メールメッセージ
	emailSubject - カスタムメッセージの件名。
	*/

  // 新規登録後の認証コード送信
  if (event.triggerSource === 'CustomMessage_SignUp') {
    event.response.smsMessage = '認証コード' + event.request.codeParameter
    event.response.emailSubject = 'メールタイトル'
    event.response.emailMessage = '認証コード ' + event.request.codeParameter
  }

  // 認証コード再送
  if (event.triggerSource === 'CustomMessage_ResendCode') {
    event.response.smsMessage = '認証コード：' + event.request.codeParameter + '<br />'
    event.response.emailSubject = 'メールタイトル'
    event.response.emailMessage = '認証コード：' + event.request.codeParameter + '<br />'
  }

  // パスワードを忘れてしまった場合
  if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    event.response.smsMessage = '認証コード：' + event.request.codeParameter
    event.response.emailSubject = 'メールタイトル'
    event.response.emailMessage = '認証コード： ' + event.request.codeParameter
  }

  //管理者によるユーザー招待
  if (event.triggerSource === 'CustomMessage_AdminCreateUser') {
    event.response.smsMessage = 'ユーザー名' + event.request.usernameParameter + '<br />'
    '仮パスワード ' + event.request.codeParameter + '<br />'
    event.response.emailSubject = 'メールタイトル'
    event.response.emailMessage =
      'ユーザー名' + event.request.usernameParameter + '<br />' + '仮パスワード ' + event.request.codeParameter
  }

  // Return to Amazon Cognito
  callback(null, event)
}
```

メッセージのカスタマイズを作成した後は、Cognito のコンソール上の「トリガー」にあるカスタムメッセージに作成した lambda 関数を割り当てることを忘れないように行う必要があります。
これでイベントに応じて、メールの内容を動的に変更することが出来るようになったかと思います。

カスタマイズ可能なイベントは他にも用意されているので、上記以外のイベントを探している場合は、参考サイトを確認するといいかもしれません。

## 参考サイト

- [カスタムメッセージ Lambda トリガー](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/user-pool-lambda-custom-message.html)
