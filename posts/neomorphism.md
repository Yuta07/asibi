---
title: 'ニューモーフィズムとは'
spoiler: '2020年流行りのニューモーフィズムとはなんぞや🤔'
quickword: 'ニューモーフィズムはじめました。'
date: '2020-09-27'
image: '/blog/neumorphism/neumorphism.svg'
---

## ニューモーフィズムとは

ニューモーフィズムは `フラットデザイン` と `スキューモフィズム` を組み合わせたデザインのことで、背景色・形状・シャドウを組み合わせて実現する、背景から浮かんでいたり・
凹んでいるのが特徴のデザインです。

※ フラットデザインとは立体感や質感などを出さないシンプルですっきりとしたデザインのことです。

※ スキューモフィズムとは視認性が良くわかりやすくユーザービリティに長けているのが特徴なデザインのことです。

[参考サイト - Goodpatch Blog(今さら人には聞けない、スキューモーフィズムとフラットデザインの違い)](https://goodpatch.com/blog/skeuomorphism-and-flat-design/)

## 実装方法

基本的に `box-shadow` を使用することで実現させます。

```css
box-shadow: 横方向 縦方向 ぼかし 広がり 色;
```

例えば、このブログの右上にある [View Blog] ボタンの場合は、下記のようになります。

```css
box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
  6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
```

上記のように `box-shadow` を複数指定することで外側だけではなく、内側や境界線にシャドウを表現することができます。

また、凹んでいるようなデザインを実現させたい場合は、 `box-shadow` に `inset` を追加することで実現可能です。

```css
box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.5),
  inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
```

これだけで、浮かびあがっている状態・凹んでいる状態を表現することができます。

`filter` を使用することで実現できれば、今っぽくていい感じとも思っていたのですが、現時点では難しいようです。

## メリット・デメリット

- メリット

  - おしゃれでかつ滑らかで柔らかいデザイン。
  - 比較的新しいデザインなので、ユーザーは新鮮に感じる。

- デメリット

  - 背景と同色を使用することからコントラストがなくなり、アクセシビリティ・視覚性が良くないため、わかりづらい UI デザインとなる。下の参考サイト内でも言われているのが、ON / OFF でのトグルボタンなどです。
  - 効率的なコーディングができない。(僕自身はそれほど難しいとは思いませんでした。)

## まとめ

新しさを取り入れたいならニューモーフィズムは良い選択かと思いますが、サービスの UI デザインを考えるならマテリアルデザインやフラットデザインなどの既存の手法を取り入れるのが無難かと感じます。

もしニューモーフィズムを試す場合は参考サイトの [medium.com - Neumorphism in user interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) に詳細が書かれていますので、参考にすることをおすすめします。

## 参考サイト

- [medium.com - Neumorphism in user interfaces](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6)
- [dribbble.com](https://dribbble.com/tags/neomorphism)
- [neumorphism.io](https://neumorphism.io/#55b9f3)
