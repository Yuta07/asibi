---
title: 'React + Amplify Auth(Cognito)での認証'
date: '2020-10-27'
updated: '2020-10-28'
image: '/blog/amplify-authclass/aws-cognito.svg'
tag: 'dev'
---

この記事は、`amplify auth` がインストール済みであることが前提となっています。

## Aamplify について

Amplify とは、モバイル・ウェブアプリ開発におけるバックエンドを簡単に作成できるようになる AWS のソリューションです。
認証・API 作成・ストレージからホスティングまで用意されており、React や Vue などのフロントエンドフレームワークから iOS / Android のモバイルフレームワークをサポートしています。

Amplify の機能の中でも、代表的なものは下記かと思います。

#### Authentication

- `Cognito` での認証が可能となります。

```bash
amplify add auth
```

#### API(GraphQL / REST)

- API の作成や DB の利用ができるようになります。

```bash
// create the db
amplify add storage

// create the api
amplify add api
```

#### Functions

- `Lambda` 関数をトリガーとして API の作成が可能となります。

```bash
amplify add function
```

#### Hosting

- Amplify でのホスティングを可能とします。

```bash
amplify add hosting

amplify publish
```

詳しくは [Amplify Docs - Guide](https://docs.amplify.aws/guides/q/platform/js)をご覧ください。

今回は `Cognito` を使用した認証について紹介していきます。

## AuthClass

React を使用して Amplify を使用する時に[Amplify の React チュートリアル](https://docs.amplify.aws/start/getting-started/setup/q/integration/react)を参考にしながら行うと、 `@aws-amplify/ui-react` を使用することになると思います。

このライブラリを使用して `auth` を追加すると、自分で UI を作成する必要なく、サインアップやログインと言った機能を利用することができます。

ただ一方で、自分で作成した認証用の UI で amplify のログインなどの機能を利用することができなくなってしまいます。

そういった自分で作成した UI で`amplify auth` を使用したい場合、 [AWS Amplify API](https://aws-amplify.github.io/amplify-js/api/classes/authclass.html)を使用することで、実現することができます。

## Auth API を使用する

今回は `AWS Amplify API` の中でも、よく使用される API に関して説明していきます。

`Auth` をインポートすることで各 API の使用が可能となります。

```typescript
import { Auth } from 'aws-amplify'
```

あとは `Auth.signUp` のような形で利用していくだけです。

- signUp
  - ユーザー名・パスワードでのサインアップが可能です。`attributes` 以下はオプションです。`email` でのサインアップを選択している場合は `username` の値は `email` となります。認証を設定している場合、登録したメールアドレス宛に認証メールが届きます。
  ```typescript
  const response: ISignUpResult = await Auth.signUp({
    username: email,
    password: password,
    attributes: {
      email, // optional
      phone_number // optional - E.164 number convention
      // other custom attributes
    }
  })
  ```
- signIn

  - サインインが可能となります。

  ```typescript
  const response: CognitoUser = await Auth.signIn({
    username: email,
    password: password
  })
  ```

- confirmSignUp

  - サインアップ後の検証コードでの認証をすることができます。認証後、アカウントのステータスは `COMFIRMED` になります。成功の場合、レスポンスは `SUCCESS` が返ってきます。

  ```typescript
  const response = await Auth.confirmSignUp(email, verificationCode)
  ```

- forgotPassword

  - パスワードをリセットする際に、登録したメールアドレス宛に認証コードとともに再設定用メールを送信します。

  ```typescript
  const response = await Auth.forgotPassword(email)
  ```

- forgotPasswordSubmit

  - メールアドレス・認証コードを使用して、パスワードの再設定が可能です。

  ```typescript
  await Auth.forgotPasswordSubmit(email, verificationCode, newPassword)
  ```

- currentSession

  - 現在ログイン中のユーザーセッションを取得できます。Redux などを使用している場合、ブラウザ更新時に auth 情報がなくなってしまいますが、この API を使用すれば再取得が可能です。

  ```typescript
  const response = await Auth.currentSession()
  ```

- currentAuthenticatedUser

  - 現在ログイン中のユーザー情報を取得できます。ログイン状態でパスワード変更をする際などに使用できます。

  ```typescript
  Auth.currentAuthenticatedUser()

  // ex) change password
  await Auth.currentAuthenticatedUser()
    .then((user) => {
      const result = await Auth.changePassword(user, password.old, password.new)
    })
    .catch((e) => {
      console.log(e)
    })
  ```

- updateUserAttributes

  - ユーザー情報の変更が可能です。

  ```typescript
  Auth.currentAuthenticatedUser()

  // ex) update user email
  await Auth.currentAuthenticatedUser()
    .then(async (user) => {
      const result = await Auth.updateUserAttributes(user, { email: newEmail })
    })
    .catch((e) => {
      console.log(e)
    })
  ```

- changePassword

  - ログイン中のユーザーのパスワードの変更ができます。

  ```typescript
  await Auth.currentAuthenticatedUser()
    .then((user) => {
      return Auth.changePassword(user, password.old, password.new)
    })
    .catch((e) => {
      console.log(e)
    })
  ```

- signOut

  - サインアウトが可能です。

  ```typescript
  Auth.signOut()
  ```

#### メール内容のカスタマイズ

メールの内容をカスタマイズする場合、以下の方法があります。

1. cognito の画面から行う。「メッセージのカスタマイズ」メニューから行う。
2. lambda でイベント毎のメール内容の設定を行う。

## まとめ

amplify を使用すれば、cognito を使用した auth の機能だけではなく、dynamoDB や lambda 等も使用することができます。amplify だけで Web アプリの開発を完結させることができるため、フロントエンドのみで簡単かつ迅速な開発ができるようになります。

一方でサーバレスアーキテクチャとしては Google の Firebase という選択肢もあります。

個人的には amplify は Firebase に比べると出来ることが多いですが、少し複雑に感じることもあったので、全体的には Firebase の方が使いやすいなという印象を受けました。

## 参考サイト

- [Amplify Docs Add authentication - React](https://docs.amplify.aws/start/getting-started/auth/q/integration/react#create-login-ui)
- [Add authentication - Authentication - Creating a custom authentication flow](https://docs.amplify.aws/guides/authentication/custom-auth-flow/q/platform/js)
- [AWS Amplify API](https://aws-amplify.github.io/amplify-js/api/classes/authclass.html)
