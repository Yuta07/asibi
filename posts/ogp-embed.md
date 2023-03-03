---
title: 'Next.jsでMarkdownのリンクからog情報を表示する'
preface: 'Next.jsのServerless Functionsを使用してリンクを貼った際にog情報が表示されるようにする方法。'
attention: '！ マークダウンをHTMLに変換するためにReact-Markdownを使用しています'
createdAt: '2021-12-28'
eyecatch: '/blog/ogp-embed/camera_3d.png'
category: 'tech'
tags: ['Next.js']
isDraft: false
---

日常の出来事や気になることを書く際にリンクから OGP を取得してページ情報を表示する方が面白いなと思い色々やってみたのでそこでの知見を共有します。

## OGP とは

「Open Graph Protcol」のことで Web サイトの内容をシェアするためのものです。

https://asibi.dev/

上記のように Web サイトのタイトルやサムネイル画像のような情報を設定することができます。

og に設定できる基本的な要素はいくつかあります。

- **type** -> Web サイトの種類を表します。`website` や `article` の指定が可能。

- **title** -> シェアした際に表示される Web ページのタイトルです。

- **description** -> シェアした際に表示される Web ページの内容です。

- **url** -> Web ページの URL です。

- **images** -> シェアした際に表示される Web サイトのサムネイル画像の URL です。

## Vercel の Serverless Functions について

今回の OGP 取得は Vercel の Serverless Functions を使用して実装します。
文字通りサーバーいらずで書けるため、コードを書くことだけに集中できる優れものです。

https://vercel.com/docs/concepts/functions/serverless-functions

Serverless Functions はプロジェクト作成時に pages フォルダ内に作成される `api` フォルダ内に作成する必要があります。
そのため、Serverless Functions を使用する際のリンクは `/api/hoge`のような形になります。

Vercel のドキュメント内にある Serverless Functions のサンプルです。エラー処理等は書かれてなくミニマムなものですが簡単に書けることがわかります。

```typescript
// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}
```

また、Node.js 以外でも Ruby や Go などもサポートされているので各々の好きな言語で書くこともできます。

## OGP の取得

外部 Web サイトからの OGP 情報の取得を実装します。

HTTP クライアントに[axios](https://github.com/axios/axios)を、外部 Web サイトのデータを dom 操作するのに[jsdom](https://github.com/jsdom/jsdom)を使用します。

**1. api フォルダ内に Serverless Functions を作成**

getOgp.ts という名前のファイルを作成します。ここまでは Vercel のサンプルと中身がない以外は同じですね。

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {}
```

**2. リクエスト内のクエリを使用して ogp 情報を取得する**

呼び出し元から送信された `req` 内のクエリを使用して ogp 情報の取得を行います。例えば、呼び出し元が `/api/getOgp?url=${href}` となっている場合は url クエリを受け取ります。

```typescript
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query
  const encodeURL = encodeURI(url as string)
  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  }

  try {
    const response = await axios.get(encodeURL, {
      method: 'get',
      responseType: 'arraybuffer', // arraybufferを指定しているのは文字化け回避のため
      headers
    })
  } catch {}
}
```

`req.query`でクエリの中身を取得して axios で指定した URL の情報を取得している、という流れになります。

**3. 取得した OGP 情報を整形**

```typescript
import axios from 'axios'
import { JSDOM } from 'jsdom'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // 省略
  try {
    const data = response.data

    const dom = new JSDOM(data)
    const meta = dom.window.document.head.querySelectorAll('meta')
    const ogp = Array.from(meta)
      .filter((element: Element) => element.hasAttribute('property'))
      .reduce((previous: any, current: Element) => {
        const property = current.getAttribute('property')?.trim().replace('og:', '')

        if (!property) return

        const content = current.getAttribute('content')
        previous[property] = content

        return previous
      }, {})

    res.status(200).json(ogp)
  } catch {
    res.status(200).json({})
  }
}
```

エラーを `200` で返しているのは一旦おいておいて、、、

流れとしては jsdom を使用して取得したレスポンスを操作しています。ogp 情報 は基本的に head の meta タグで存在しているため、そのように指定します。
`queySelectorAll` で meta タグに一致するもの全てを配列で取得していますが、さらにその中の `<meta property=og:title content="" />` のように property タグを指定してフィルターをかけます。

すると最終的に json の形で返すことになっているかと思います。
例えば、 `/api/getOgp?url=https://asibi.dev/cloudinary-dynamic` の場合は下記のような結果になります。

```json
{
  "title": "Next.js製ブログ用のOGP画像をCloudinaryで動的に生成する",
  "description": "Next.jsで作成されている本サイトの記事のタイトルをCloudinaryを使用して動的に生成します。",
  "url": "https://asibi.dev/cloudinary-dynamic",
  "type": "website",
  "image": "https://res.cloudinary.com/https-yutaaaaa-vercel-app/image/upload/l_text:TakaoGothic_50_bold:Next.js製ブログ用のOGP画像をCloudinaryで動的に生成する,co_rgb:000000,w_760,c_fit/v1640180870/cloudinary_fzk9qg.png",
  "image:alt": "yutanote image",
  "image:width": "800",
  "image:height": "420",
  "site_name": "Next.js製ブログ用のOGP画像をCloudinaryで動的に生成する"
}
```

これで OGP 情報の取得までは完了となります。以降は React-Markdown において取得した OGP 情報を表示するための一例の紹介となります。

## Markdown 内に取得した OGP 情報を表示する

HTML に変換するためのライブラリとして React-Markdown を使用していますが、どれを使用していても基本的には変わらないはずです。

取得したデータを React-Markdown で HTML に変換 => タグに合わせて作成したコンポーネントにデータを渡す => コンポーネントで OGP を表示するか判断

**1. React-Markdown を使用して HTML に変換する。**

```typescript
export const Markdown = () => {
  const MarkdownLink: FC<{ children: ReactNode; href?: string }> = ({ children, ...props }) => {
    const { href } = props

    return <Link href={href || ''}>{children}</Link>
  }

  return (
    <ReactMarkdown
      skipHtml={false}
      unwrapDisallowed={true}
      remarkPlugins={[remarkGfm]}
      components={{
        a({ children, href, ...props }) {
          return (
            <MarkdownLink href={href} {...props}>
              {children}
            </MarkdownLink>
          )
        },
        p({ children, ...props }) {
          const detectTagName = ['a']

          if (props.node.children[0].type === 'element' && detectTagName.includes(props.node.children[0].tagName)) {
            return <div {...props}>{children}</div>
          } else {
            return <p {...props}>{children}</p>
          }
        }
      }}
    >
      {data} // マークダウンデータ
    </ReactMarkdown>
  )
}
```

p タグの場合のコンポーネントを記載しているのは、以前であれば p タグを親要素に指定しないようにできたのですが、 `React-Markdown` がバージョンアップしたことでそれが出来なくなってしまったためタグで判別するためです。
これをしない場合、OGP 表示のための a タグの親要素が p タグで確定となってしまうため、子要素に指定できるタグが限られてしまうのでこのようにしています。

**2. 内容によってそのまま表示か OGP 表示かを切り替える**

マークダウンの文章内で下記のように書いていた場合は OGP 表示を避けるために実装します。

```text
HTTP クライアントに[axios](https://github.com/axios/axios)を使用する
```

この場合は文章の一部としてリンクを表示したいため、OGP として表示するのは望ましくありません。 そのためリンクのみのテキストの場合のみ OGP を表示するようにします。

```typescript
import { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
  href: string
}

export const Link: FC<Props> = ({ children, href }) => {
  const isURLChildren = children?.toString().startsWith('http') || children?.toString().startsWith('https')

  if (isURLChildren) {
    return <EmbedLink href={href} />
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
```

文章自体が `http` または `https` で始まる場合のみ OGP 表示します。

**3. リンクから OGP の実装、表示をする**

最後にリンクごとに先ほど作成した `Serverless Functions` を呼び出して取得した値を表示します。

```typescript
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  href: string
}

type OgpState = {
  [key in string]: string
}

export const EmbedLink = ({ href }: Props) => {
  const [ogState, setOgState] = useState<OgpState[] | null>(null)

  const fetchOgpData = useCallback(async () => {
    await axios.post(`/api/getOgp?url=${href}`).then((res) => {
      const { data, status } = res as { data: OgpState[]; status: number }

      if (status === 200) {
        setOgState(data)
      }
    })
  }, [href])

  useEffect(() => {
    fetchOgpData()
  }, [fetchOgpData])

  if (ogState === null) return null

  let title = ''
  let description = ''
  let imageURL = ''
  let imageAlt = ''

  if ('title' in ogState) {
    title = ogState['title']
  } else if ('site_name' in ogState) {
    title = ogState['site_name']
  }

  if ('description' in ogState) {
    description = ogState['description']
  }

  if ('image' in ogState) {
    imageURL = ogState['image']
  }

  if ('image:alt' in ogState) {
    imageAlt = ogState['image:alt']
  } else if ('title' in ogState) {
    imageAlt = ogState['title']
  }

  if (!Object.keys(ogState).length) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {href}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <span>{href}</span>
      </div>
      <div>
        <img src={imageURL} alt={imageAlt} />
      </div>
    </a>
  )
}
```

色々やっている風に見えますが単純で値が帰ってきたら `ogState` に格納して表示しているだけです。
先ほど作成した Serverless Functions でエラー時にステータス `200` で空の json データを返していたのはもし ogp データが取得できなかった場合にリンクのみの表示を行うためです。

また、指定した Web サイトによっては `title` がなかったり `description` がなかったりするので、その場合は別プロパティで代用しています。

スタイルの指定などは今回は特にしていませんが、ここまでで OGP の表示はできているかと思います。

補足事項として、ogp 情報が property で取得できない場合があり、例えば name で存在していたりすることがあります。今回はそういった場合ではリンクのみの表示となりますのでご留意ください。
また amazon では head 内ではなく、body 内の要素として ogp 情報が存在しているためこういったケースにも別途対応する必要があります。

## 参考サイト

- [外部サイトの OGP を取得する](https://zenn.dev/littleforest/articles/scrape-og-tags/)
