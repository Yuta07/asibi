---
title: 'Next.jsでAMP対応'
quickword: 'Next.jsでAMP対応する際の留意点✏️'
date: '2020-09-30'
updated: '2020-10-28'
image: '/blog/next-amp/amp-imitation.svg'
tag: 'dev'
---

## What's AMP ?

AMP は Accelerated Mobile Pages の略でウェブサイトを高速かつユーザーファーストにし、収益化するシンプルかつ堅牢なフォーマット。
簡単にいうと、ページを高速に表示させることを提供する、ということになります。

AMP ページが Google のようなプラットフォームによってキャッシュされることで、コンテンツが検索クエリに関連が深いと判断された場合、検索結果にはキャッシュされたページの URL がリンクされます。
キャッシュされたコンテンツのため、コンテンツの取得までの時間が短くなり、コンテンツが瞬時に行われるようです。

また、下記にあげられるような最適化を組み合わせていることも高速化の理由として上げられています。

1. すべての AMP JavaScript を非同期に実行

- AMP は非同期の JavaScript のみを許可しています。独自の script を書く場合は `amp-script` を使用することができます。

2. すべてのリソースを静的にサイズ設定

- AMP はリソースのダウンロードを待たずにページのレイアウトを読み込みます。読み込みに時間がかからないので高速になります。

3. CSS のインライン表示とサイズ制限

- インラインスタイルのみを許可し、シートの最大サイズを 50 キロバイトとしています。

その他の理由に関しては amp.dev の公式サイトに記載されているので、目を通すといいかもしれません。

[AMP の仕組み - amp.dev](https://amp.dev/ja/about/how-amp-works/)

## When AMP ?

以下のような状況の場合、AMP を使用するのにはいいかもしれません。

- ユーザーのサイト流入を高めたい場合。
  - 単純に読み込み速度が向上して、検索結果の上位に表示されれば、ユーザーが増える可能性が高まります。
- ニュースサイト、e コマース、ストーリーテラーのいずれであっても、AMP を使用することができます。

## Next.js で AMP

タイトルにもあるように、Next.js で AMP 対応をしてみます。

Next.js で AMP を使用する場合は `AMP First Page` か `Hybrid AMP Page` を選択する必要があります。

- AMP First Page
  - AMP のみです。スタイルの記述もインラインで行う必要があります。おそらく `CSS-in-JS` で記述することがほとんどだと思います。
  - AMP Optimizer が自動的に最適化することで、最大 42%パフォーマンスが改善されます。
- Hybrid AMP Page
  - 単なる HTML ページとしても、AMP ページとしてもレンダリングできます。AMP 対応したい場合は、URL に `amp=1` をつける必要があります。
  - AMP Optimizer で最適化されません。

[Next.js document - next/amp](https://nextjs.org/docs/api-reference/next/amp)

それぞれ設定は下記のようにするだけです。

```tsx
// AMP First Page
export const config = { amp: true }

const App = () => {
  return (
    <div>
      <h3>My AMP About Page!</h3>
    </div>
  )
}

// Hybrid AMP Page
import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

const App = () => {
  const isAmp = useAmp()

  return (
    <div>
      <h3>My AMP About Page!</h3>
      {isAmp ? (
        // ampページの場合
      ) : (
        // ampページでない場合
      )}
    </div>
  )
}
```

ただ、 `Hyblid AMP Page` で作成する場合は、AMP のみのページとそうでないページの 2 つを用意する必要があるため、少々面倒なこともあります。
2 ページ作成するとしても、デザインを凝っているページほど時間がかかってしまったり、結局同じようなデザインになって差別化ができなかったりするため、AMP 対応する際は、事前によく考慮したほうがいいかもしれません。

今ご覧になっているこのサイトは AMP で作成されていますが、上記の理由により、ヘッダーロゴと一部のページを除いて `AMP First Page` で作成しています。

## AMP Component を使用する

Next.js 上で AMP Component / Actions and events を使用してみます。

- [The AMP Component Catalogue](https://amp.dev/ja/documentation/components/?format=websites)
- [Actions and events](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events/#*---all-elements)

今回、本サイト内で使用した下記の AMP Component / Actions and events を例に進めていきます。

- [amp-img](https://amp.dev/ja/documentation/components/amp-img/?format=websites)
- [amp-social-share](https://amp.dev/ja/documentation/components/amp-social-share/?format=websites)
- [scrollTo](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events/#*---all-elements)

#### `amp-img`

```tsx
/*
## layout
responsive - 自動的に拡大縮小される画像を作成
intrinsic - responsiveと基本同一だが、拡大縮小する要素として SVG 画像を使用
fixed - fixedにした上でwidth / height を指定すると固定サイズとなる。
*/

<amp-img src="/image-path" width="240" height="240" layout="intrinsic" alt="image-alt"></amp-img>
```

css を記述する場合は、 `style jsx` を使用して、 `amp-img` を指定した中で記述する必要があります。
また、今回は `TypeScript` を使用しているので、ルートディレクトリ上に `amp.d.ts` を作成して、型を記述する必要があります。

```typescript
// ref: https://stackoverflow.com/questions/50585952/typescript-and-google-amp-property-amp-img-does-not-exist-on-type-jsx-intrin/50601125#50601125

// Any element you create will be accepted
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

// The elements you list here will be accepted, attributes don't matter
declare namespace JSX {
  interface IntrinsicElements {
    'amp-img': any
  }
}

// The elements you list here will be accepted, and only with the attributes that you include here
declare namespace JSX {
  interface AmpImg {
    alt?: string
    src?: string
    width?: string
    height?: string
    layout?: string
  }
  interface IntrinsicElements {
    'amp-img': AmpImg
  }
}
```

#### `amp-social-share`

```tsx
/*
type - プロバイダを指定します。Twitterの他にFacebookやLinkedInを指定できる。
className - className="rounded" にすることで丸型アイコンに変更できます。デフォルトはRectangle。
デフォルトの幅は 60 ピクセル、デフォルトの高さは 44 ピクセル。
*/
<amp-social-share
  className="rounded"
  aria-label="Share on Twitter"
  type="twitter"
  width="40"
  height="40"
></amp-social-share>
```

#### `scrollTo`

アニメーションを使用して、ページの上部に戻るアクションを作成するために使用する例です。
`amp-animation` を使用したかったのですが、難しかったため、 `scrollTo` で対応しました。

アクションとそれに対応する要素に対して `id` を割り当てる必要があります。

```tsx
// ページのどこまで戻るか。今回はヘッダーの位置まで戻ることにする。
<header className="header-outer" id="pageTopElement">
  // 中略
</header>
```

```jsx
// ページの上部に戻るボタン。
<button on="tap:pageTopElement.scrollTo(duration=1000)" className="smooth-scroll-button">
  <amp-img src="/scroll-top.svg" fallback="" width="48" height="48" layout="intrinsic" alt="scroll-to-top"></amp-img>
</button>
```

やっていることは簡単で、 `button` の `onClick` でイベントで機能して、指定した id `pageTopElement` までスクロールするようにしています。
`duration=1000` で id の位置まで戻る時間の間隔を指定しています。

`tsx` にすると `button` に `on` を指定した際に型チェックが入ってしまうため、やむなく `jsx` にしています。

## まとめ

Next.js で AMP Compoent を使用した場合を例を交えて、説明させていただきました。

[The AMP Component Catalogue](https://amp.dev/ja/documentation/components/?format=websites) から状況にあったコンポーネントを探すのはなかなか面倒な部分もあるのですが、種類は豊富なので様々な場面に対応可能なのではないかと思います。

また、[Actions and events](https://amp.dev/documentation/guides-and-tutorials/learn/amp-actions-and-events/#*---all-elements)を使用すれば、web サイト作成の幅も広がりそうだなと感じました。
