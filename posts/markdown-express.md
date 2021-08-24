---
title: 'ブログ内マークダウンの表現'
date: '2020-09-24'
updated: '2021-08-24'
image: '/blog/markdown-express/markdown-express.svg'
tag: 'general'
---

## はじめに

このブログは Next.js で構築されており、AMP に対応しています。
Next.js でのブログの作成に関しては[公式サイト](https://nextjs.org/)に記載されています。

公式と異なるのは `remark` ではなく、 `react-markdown` を使用していることです。

[参考サイト](https://jfelix.info/blog/how-to-make-a-static-blog-with-next-js)

以下がブログ内で使用されているマークダウンの表現となります。

## Heading

```
## Heading2
### Heading3
#### Heading4 or 5
```

## Heading2

### Heading3

#### Heading4 or 5

## List

```
- unOrderedList
  - ListItem
  - ListItem
  - ListItem
- List
- List

1. 1番目
2. 2番目
3. 3番目
```

- List
  - ListItem
  - ListItem
  - ListItem
- List
- List

1. 1 番目
2. 2 番目
3. 3 番目

## Hr

---

## Inline

```
**これは太字です。**
ここに `code` をいれます。
これは[Githubのリンク](https://github.com/Yuta07)です。
```

**これは太字です。**

~~この文章に打ち消し線を。~~

ここに `code` をいれます。

これは[Github のリンク](https://github.com/Yuta07)です。

## Blockquote

```
> これは引用です。
```

> これは引用です。

## Code

```typescript
import React from 'react'

const CoolComponent = () => <div>I'm a cool component!!</div>

export default CoolComponent
```

## Image

```
![imageSampleStars](/stars_sample.jpg)
```

![imageSampleStars](/blog/markdown-express/stars_sample.jpg)
