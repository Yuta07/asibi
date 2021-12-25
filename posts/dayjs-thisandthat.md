---
title: 'Day.jsあれこれ'
preface: 'Day.jsのちょっとした機能紹介'
createdAt: '2021-09-02'
category: 'tech'
tags: ['Others']
---

## Moment.js から Day.js へ

あるプロジェクトでもともと Moment.js を使用していたのですが、Moment.js がメンテナンスモードに入るということで置き換えを検討しました。

詳細は 👇 こちら 👇 をどうぞ。

[Moment.js Documentation - project-status](https://momentjs.com/docs/#/-project-status/)

Moment が推奨している代替案にはいくつかあり、[npm トレンド](https://www.npmtrends.com/date-fns-vs-luxon-vs-moment-vs-dayjs)をみる限りでは `date-fns` が人気のようでしたが、

- Moment の仕様に慣れていること
- 他ライブラリと比べて軽量であること
- 時間をかけずに代替したいこと

を踏まえて `Day.js` で既存の `Moment.js` のコードを置き換えることにしました。

実際、既存のコード上の `moment()` を `dayjs()` に書き換えるだけで済むことが多かったのでかなり楽に書き換えることができました。

## Day.js あれこれ

Day.js のちょっとした機能やプラグインの使い方を紹介します。
あらかじめインストールしておきましょう。Day.js ではパッケージに型宣言が含まれているので、 `@types/~~~`はインストールする必要はありません。

```bash
yarn add dayjs
```

デフォルトでインポートしたい場合は `tsconfig.json` に下記の設定を加える必要があります。

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

これで TypeScript で Day.js をデフォルトインポートする準備が整いました。

#### locale

日本語で使用したい場合は `ja` を指定します。

```typescript
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')
```

#### Format

フォーマット化された日付を返すことができます。

https://day.js.org/docs/en/display/format

```typescript
import dayjs from 'dayjs'

const day = dayjs()

dayjs(day).format('YYYY/MM/DD') // 2021/09/02
```

#### Manipulate

- add
  - 指定日時からの加算

単位に指定できるものは[こちら](https://day.js.org/docs/en/manipulate/add#list-of-all-available-units)に記載されています。`subtract` の場合でも同じです。

```typescript
import dayjs from 'dayjs'

// dayjs().add(7, unit)

dayjs().add(7, 'day') // 指定日時より7日後
```

- subtract
  - 指定日時からの減算

```typescript
import dayjs from 'dayjs'

// dayjs().subtract(7, unit)

dayjs().subtract(7, 'day') // 指定日時より7日前
```

- Start of Time
  - 指定日時のユニットに応じた最初の値

単位に指定できるものは[こちら](https://day.js.org/docs/en/manipulate/start-of#list-of-all-available-units)に記載されています。`End of Time` の場合でも同じです。

```typescript
import dayjs from 'dayjs'

dayjs('2021-09-02').startOf('month').format('YYYY/MM/DD') // 2021/09/01
```

- End of Time
  - 指定日時のユニットに応じた最後の値

```typescript
import dayjs from 'dayjs'

dayjs('2021-09-02').startOf('month').format('YYYY/MM/DD') // 2021/09/30
```

#### Diff

2 つの Date の差異を求めることができます。

単位に指定できるものは[こちら](https://day.js.org/docs/en/display/difference#list-of-all-available-units)に記載されています。
どちらを始点とするかで結果の `+` `-` が変わるので気をつけた方が良さそうです。

```typescript
import dayjs from 'dayjs'

dayjs('2019-01-25').diff(dayjs('2018-06-05'), 'month') // 7
dayjs('2018-06-05').diff(dayjs('2019-01-25'), 'month') // -7
```

### Plugin の利用方法

Day.js には多くのプラグインが用意されていて、各ファイルで呼び出すことで使用できます。

https://day.js.org/docs/en/plugin/plugin

#### updateLocale

例えば週の初めを日曜日から月曜日に変更したい場合などに使います。

```typescript
import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(updateLocale)
dayjs.updateLocale('ja', { weekStart: 1 })
```

#### isBetween

```typescript
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

dayjs('2021-08-15').isBetween('2021-08-01', '2021-08-31') // true
```

#### isSameOrAfter

```typescript
import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

dayjs.extend(isSameOrAfter)

dayjs('2021-08-01').isSameOrAfter('2021-08-15', 'day') // false
```

#### isSameOrBefore

```typescript
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

dayjs('2021-08-01').isSameOrBefore('2021-08-15', 'day') // true
```

---

今回紹介するものは以上となります。`Moment.js` ライクに記述できるので、`Moment.js` を使用していた方にはおすすめです。
