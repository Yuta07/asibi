---
title: 'React Native for Webによるリンクコンポーネントの共通化'
preface: 'モノレポ環境下のReact / React NativeプロジェクトでReact Native for webによるリンクコンポーネントの共通利用'
createdAt: '2023-03-02'
eyecatch: '/blog/monorepo-reactnative-forweb/duck_3d.png'
category: 'tech'
tags: ['React', 'React Native']
isDraft: false
---

Turborepo によるモノレポ環境下の React と React Native プロジェクトで、React Native によるリンクコンポーネントを React Native for Web を利用して Web で使用できるように共通化します。

**今回試した環境**

- React - ^18.2.0
- React Native - ^0.70.1
- React Native for Web - ^0.18.9

## はじめに

モノレポ構成での React / React Native を動かすにあたって下記のサイトを参考にしました。

- [Working with Monorepos](https://docs.expo.dev/guides/monorepos/)
- [Turborepo react-native starter](https://github.com/vercel/turbo/tree/main/examples/with-react-native-web)

## 共通で利用するリンクコンポーネント

今回の例では、ルーティングの部分で web で React Router 、 Native で React-Navigation を使用しています。
React Native の `Text` や `Button` コンポーネントを使用して、イベントとしてルーティングさせる形を取ることもできますが、
Web の場合は SEO やアクセシビリティの観点から `a` タグで描画させた方がいいかと思います。

そこで、web では a タグで描画させるために React Native for Web の `Text` コンポーネントを使用します。
React Native for Web を通すことで `Text` コンポーネントで `href` props を渡すことができるようになり、 `a` タグとして描画されることになります。

```tsx
import { Text, TextProps } from 'react-native'

import type { ReactNode } from 'react'

type CustomLinkProps = {
  children: ReactNode
  href: string
} & TextProps

export const Link = ({ children, ...props }: CustomLinkProps) => {
  return (
    <Text style={[styles.link, customStyle]} accessibilityRole={props.accessibilityRole || 'link'} {...props}>
      {children}
    </Text>
  )
}
```

`a` タグとして使用するだけであれば、上のコード例そのままを使用すれば可能となります。
`href` を `Text` に渡すときに `{...props}` の中に含めているのは `Text` コンポーネントには `href` が型としてないことで、エラーになってしまうためです。

```tsx
// Webで使用
<Link href="https://github.com/">Github</Link>
```

SPA でのルーティングの場合（今回は React Router）、ライブラリ側で用意されている `Link` コンポーネントを使用してページ間のルーティングを行いたい場合があるかと思います。
これは共通コンポーネント側の `Link` 内に処理を挟むことで実現も可能です。別でファイルを分けた方が見やすい気もしますが今回はまとめています。

この実装は [solito](https://github.com/nandorojo/solito)の[Link](https://github.com/nandorojo/solito/blob/master/src/link/core.tsx)コンポーネントを参考にしました。

```tsx
import { Text, TextProps } from 'react-native'
import { Link as RouterLink } from 'react-router-dom' // 追加

import type { ReactNode } from 'react'

type CustomLinkProps = {
  children: ReactNode
  href: string
} & TextProps

export const Link = ({ children, ...props }: CustomLinkProps) => {
  // 追加
  if (Platform.OS === 'web' && !['http://', 'https://'].includes(props.href)) {
    return (
      <RouterLink to={props.href} role="link">
        {children}
      </RouterLink>
    )
  }

  return (
    <Text style={[styles.link, customStyle]} accessibilityRole={props.accessibilityRole || 'link'} {...props}>
      {children}
    </Text>
  )
}
```

今回は簡単に `http` `https` が `href` にあるかどうかでページ内リンクかどうかを判定しています。
使い方も先ほどと同様でページ内リンクを渡すだけです。

```tsx
// Webで使用
<Link href="/home">ホーム画面</Link>
```

また Native のルーティングで想定している React-Navigation でも [Link](https://reactnavigation.org/docs/link/) が用意されており、
今回作成したコンポーネント内でさらに分岐させることもできますが、イベントによるルーティングを行います。
イベントで渡すことによって、リンクだけでなく処理を含めたいときにも便利なため使用しやすくなるという利点もあります。

```tsx
// Nativeで使用
export function Home({ navigation }: Props) {
  return <Link onPress={() => navigation.navigate('Home')}>ホーム画面</Link>
}
```

共通で使用するコンポーネント内で使用する時も `href` と `onPress` イベントを渡せば問題ありません。

```tsx
// 共通コンポーネントで使用
export const CommonComponent = ({ onNavigation }: { onNavigation: () => void }) => {
  return (
    <Link href="/home" onPress={onNavigation}>
  )
}
```

web でも `a` タグとして描画できる上に SPA の場合は React-Router も使用できて、Native ではイベントでルーティングできるという一例でした。

最後までありがとうございました 👏

### 参考まとめ

- [Working with Monorepos](https://docs.expo.dev/guides/monorepos/)
- [Turborepo react-native starter](https://github.com/vercel/turbo/tree/main/examples/with-react-native-web)
- [solito](https://github.com/nandorojo/solito)
