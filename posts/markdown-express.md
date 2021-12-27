---
title: 'ブログ内マークダウンの表現'
preface: 'マークダウンで使用しているスタイルを忘れないようにまとめておく。'
createdAt: '2020-09-24'
updatedAt: '2021-08-26'
category: 'ordinary'
tags: ['Others']
---

## はじめに

このブログは Next.js で構築されています。
Next.js でのブログの作成に関しては[公式サイト](https://nextjs.org/)に記載されています。

公式と異なるのは `remark` ではなく、 `react-markdown` を使用していることです。

https://jfelix.info/blog/how-to-make-a-static-blog-with-next-js

# Heading

```txt
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
```

# Heading

## Heading2

### Heading3

#### Heading4

##### Heading5

## List

```txt
- リスト
  - アイテム
  - アイテム
  - アイテム
    1. 1 番目
    2. 2 番目
    3. 3 番目
- リスト
- リスト

1. 1番目
2. 2番目
3. 3番目
  1. 1 番目
  2. 2 番目
  3. 3 番目
```

- リスト
  - アイテム
  - アイテム
  - アイテム
    1. 1 番目
    2. 2 番目
    3. 3 番目
- リスト
- リスト

1. 1 番目
2. 2 番目
3. 3 番目
   1. 1 番目
   2. 2 番目
   3. 3 番目

## Hr

---

## Inline

```txt
**これは太字です。**
~~この文章に打ち消し線を。~~
ここに `code` をいれます。
これは[Githubのリンク](https://github.com/Yuta07)です。
```

**これは太字です。**

~~この文章に打ち消し線を。~~

ここに `code` をいれます。

これは[Github のリンク](https://github.com/Yuta07)です。

## Blockquote

```txt
> これは引用です。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
```

> これは引用です。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。

## Code

```typescript
import React from 'react'

const CoolComponent = () => <div>I'm a cool component!!</div>

export default CoolComponent
```

## Image

```txt
![imageSampleStars](/stars_sample.jpg)
```

![imageSampleStars](/blog/markdown-express/stars_sample.jpg)

## Embed Link

```txt
// propertyタグが存在しない場合

https://swr.vercel.app/

// propertyタグが存在する場合

https://ja.reactjs.org/
```

https://swr.vercel.app/

https://ja.reactjs.org/
