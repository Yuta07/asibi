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

[Embed](https://www.amazon.co.jp/Google%E3%81%AE%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0-%E2%80%95%E6%8C%81%E7%B6%9A%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93%E3%80%81%E6%96%87%E5%8C%96%E3%80%81%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9-%E7%AB%B9%E8%BE%BA-%E9%9D%96%E6%98%AD/dp/4873119650/?_encoding=UTF8&pd_rd_w=s6qz3&pf_rd_p=d753a891-bba8-4352-b10c-3c8d00c6b548&pf_rd_r=W7KDTC5V0AB1ZK6CH4GD&pd_rd_r=cb5d67e7-c33b-494a-9ebe-3df49ea50481&pd_rd_wg=2BeyD&ref_=pd_gw_ci_mcx_mr_hp_atf_m)
