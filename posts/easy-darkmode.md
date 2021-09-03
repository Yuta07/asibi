---
title: 'イージーな気分でダークモードを実装する'
quickword: 'Next.jsで最小限の実装でダークモードを実装する'
date: '2021-09-03'
image: '/blog/easy-darkmode/flat-moon.svg'
tag: 'dev'
---

## やること

最小限の構成だけでダークモードを実装します。ダークモードを実装する際は

- localStorage
- sessionStorage

に値を保存するやり方が一般的になっているかと思いますが、今回は無しで切り替えのみの実装を行います。

今回作成するのはブログ内のダークモードと同様のものとなります。そのため、実際の挙動はページ右上の切り替えボタンを押下してお試しください。

![darkmode-yutaaaaa.png](/blog/easy-darkmode/darkmode-yutaaaaa.png)

ソースコードは[こちら](https://github.com/Yuta07/yutaaaaa)から参照してください。ソースコードでは今回紹介しているものとはグローバル変数を使用している点が異なっているので注意してください。

## ベースとなるスタイルを root に定義

まずはじめに、 `global.scss(css)` で `body` にカラーを定義します。ダークモードの場合のカラー定義もこの時点で行っておきます。

```scss
// グローバル変数(root)を使用している場合は変数で書いても問題ありません

body {
  color: #333333;
  background: #ffffff;

  &.dark {
    color: #ffffff;
    background: #0d1117;
  }
}
```

## ダークモードの切り替えを実装する

実際にダークモードの切り替えを行う部分の実装を行います。トグルボタンは面倒なので今回はボタン 1 つで実装できる形をとっています。

```typescript
// ThemeSwitch.tsx

import { useCallback, useEffect, useState } from 'react'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  const handleSwitchTheme = useCallback(() => {
    setIsDark((prev) => !prev)
  }, [])

  return (
    <button name="toggle" className={isDark ? styles.switchOn : styles.switchOff} onClick={handleSwitchTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        aria-labelledby="title"
        aria-describedby="desc"
        role="img"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={isDark ? styles.dark : styles.light}
      >
        <title>Half Moon</title>
        <desc>A line styled icon from Orion Icon Library.</desc>
        <path
          data-name="layer1"
          d="M33.9 11A16.8 16.8 0 0 1 12 34.1 20.1 20.1 0 1 0 33.9 11z"
          fill="none"
          stroke="#939597"
          strokeMiterlimit="10"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  )
}
```

ダークモードの切り替えの流れは以下のようになります。

1. ボタンをクリックで `isDark` が `true` `false` が切り替わる。
2. ステートが切り替わると `useEffect` が動いて `body` に `dark` という `class` を追加する。
3. 画面のテキストの色・背景色が切り替わる。

もちろん `dark` の際にボタンをクリックすれば通常のモードに戻ります。

`ThemeSwitch` に適用しているスタイルは 👇 こちら 👇 になります。

```scss
// ThemeSwitch.module.scss

.switch {
  padding: 4px;
  display: inline-flex;
  border-radius: var(--line-radius);
  cursor: pointer;
}

.switchOn {
  @extend .switch;

  background: #1c1d1f;
  border: 1px solid#F5DF4D;
}

.switchOff {
  @extend .switch;

  background: #939597;
  border: 1px solid transparent;
}

.theme {
  width: 32px;
  height: 32px;
}

.light {
  @extend .theme;

  path {
    fill: #ffffff;
  }
}

.dark {
  @extend .theme;

  path {
    fill: #f5df4d;
  }
}
```

以上となります。ブログなどに手軽にダークモードを実装するには今回のような最小限の構成で充分かと思いので、ぜひ試してみてください。
