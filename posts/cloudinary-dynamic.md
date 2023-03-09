---
title: 'Next.js製ブログ用のOGP画像をCloudinaryで動的に生成する'
preface: 'Next.jsで作成されている当サイトの記事のタイトルをCloudinaryを使用して動的に生成する。'
createdAt: '2021-09-01'
updatedAt: '2021-09-03'
eyecatch: '/blog/cloudinary-dynamic/cloud_3d.png'
category: 'tech'
tags: ['Next.js, 'Cloudinary']
isDraft: false
---

## Cloudinary

[Cloudinary](https://cloudinary.com/) は画像や動画などのメディアを動的 URL を使用して変換・最適化・配信を簡単にできるサービスです。

この記事では Cloudinary にアップロードした画像をブログページごとに動的に変換する方法を紹介します。

## Cloudinary への登録

まずは Cloudinary の登録をします。

[Cloudinary の新規登録ページ](https://cloudinary.com/users/register/free)にて登録を行います。

`Company or site name` の登録はオプションなので、登録する必要はありません。（2021/09/01 現在）

## OGP 画像を動的に生成する

**1. 画像をアップロード**

画像の動的生成を行うための元となる画像をアップロードします。

例として本ブログの OGP 画像の下となっている下記の画像を使用します。使用している画像のサイズは 800×420 ですが、それ以上大きくても小さくても問題はありません。

![ogp_background.png](/blog/cloudinary-dynamic/background.png)

画像のアップロードはログイン後のヘッダーから `Media Library` ページを開いて、画面右上の `Upload` から行えます。

これで画像の用意は完了です。

**2. OGP 画像の URL をカスタマイズして動的画像を生成**

画像をアップロードしたら、画像左上の `Copy URL` アイコンをクリックして画像の URL をコピーします。

![upload_cloudinary_image.png](/blog/cloudinary-dynamic/upload_cloudinary_image.png)

コピーした URL はこんな感じになります。

```txt
https://res.cloudinary.com/Cloudinary_cloud_name/image/upload/v12345678910/background.png
```

この URL に直接設定を書き込むことで、画像上に文字を含めたり、画像のリサイズなどを実現させることができます。
実際に設定を追加するのは `/upload/` と `/v1234~~~/` の間になります。

例として、このブログ記事のタイトルとなっている、「Next.js ブログ用の OGP 画像を Cloudinary で動的に生成する」というテキストを画像上に表示させたいと思います。

画像にテキストを埋め込む場合は

```txt
l_text:フォントの種類_サイズ_太さ:テキスト内容,カラーなどのオプション
```

という書き方をする必要があります。

なお、調べた限りでは日本語で使用できるフォントはこれだけのようでした。

- TakaoExGothic
- TakaoExMincho
- TakaoGothic
- TakaoMincho
- TakaoPGothic
- TakaoPMincho

https://support.cloudinary.com/hc/en-us/articles/202521262-Can-I-create-text-overlays-in-Japanese-

今回はオプションを追加して以下のような URL とします。

```txt
https://res.cloudinary.com/Cloudinary_cloud_name/image/upload/l_text:TakaoGothic_40:Next.jsブログ用の OGP 画像を Cloudinary で動的に生成する,co_rgb:333333,w_520,c_fit/v12345678910/background.png
```

- `Cloudinary_cloud_name`
  - ここには自身の `cloudinary` の名前が入ります。
- `co_rgb:333333`
  - フォントカラーを `#333333` にします。
- `w_520`
  - フォントの表示される幅を 520px に設定しています。
- `c_fit`
  テキストを自動で改行することができます。

実際に完成した URL を確認すると、このような画像が出来上がります。

![cloudinary_customize.png](/blog/cloudinary-dynamic/cloudinary_customize.png)

これで動的に画像を生成することができました。参考にしたサイトを下記に記載しておくので覗いてみるといいかもしれません。

**参考サイト**

- 簡単に操作したい場合
  - [Cloudinary で動的に OGP 画像を生成する方法](https://catnose99.com/cloudinary-dynamic-ogp-image/)
- 少し詳しくみたい場合
  - [Cloudinary の画像変換パラメータまとめ 〜 オーバーレイ・アンダーレイ](https://dev.classmethod.jp/articles/cloudinary-transform-images-over_underlay/)
- 実際の例をいくつかみたい場合
  - [Cloudinary Cookbook](https://cloudinary.com/cookbook)

**3. OGP 画像の URL を メタタグに含める**

Next.js にて動的 OGP 画像の配信をする場合のみ参考にしていただければと思います。なお、今回は `next-seo` を使用して実装していく流れとなります。

とはいえ、やること自体は単純で取得したブログのタイトルや画像などをメタタグに書き込んでいくだけです。

```typescript
import { BlogJsonLd, NextSeo } from 'next-seo'

~~~

const CLOUDINARY_URL = `https://res.cloudinary.com/Cloudinary_cloud_name/image/upload/l_text:TakaoGothic_40:${blog_title},co_rgb:333333,w_520,c_fit/v12345678910/background.png`

return (
  <div>
    <NextSeo
      title={ブログタイトル}
      description={ブログの説明}
      openGraph={{
        type: 'article',
        title: ブログタイトル,
        description: ブログの説明,
        url: `https://asibi.dev/${ブログのURL}`,
        images: [
          {
            url: CLOUDINARY_URL,
            width: 800,
            height: 420,
            alt: 'Og Image Alt',
          },
        ],
      }}
      twitter={{
        handle: '@asibi3Q',
        site: '@asibi3Q',
        cardType: 'summary_large_image',
      }}
    />
    <BlogJsonLd
      url={`https://asibi.dev/blog/${ブログのURL}`}
      title={postData.data.title}
      images={[CLOUDINARY_URL]}
      datePublished={`${ブログ公開日}T09:00:00+08:00`}
      dateModified={`${ブログ更新日}T09:00:00+08:00`}
      authorName="asibi"
      description={ブログの説明}
    />
    <!-- ~~~ -->
  </div>
)
```

書き込んだ後は Twitter の [Card validator](https://cards-dev.twitter.com/validator) で確認をしてみるといいと思います。

以上で Next.js + Cloudinary で動的に OGP 画像の生成して配信まで完了となります！
