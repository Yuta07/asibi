---
title: 'Chart.jsのチャート内に注釈を描写する'
quickword: 'チャート内にラインによるannotationを引く。'
date: '2020-10-31'
image: '/blog/chartjs-annotation/annotation.svg'
tag: 'dev'
---

## はじめに

業務で React と Chart.js を使用しているのですが、チャートの x 軸の日付でデータの比較をするにあたって、チャート内にラインを引くためにプラグインの `chartjs-plugin-annotation.js` を使用しました。
設定自体は特に難しくないのですが、React で `chartjs-plugin-annotation.js` を使用した記事があまりなかったので、まとめることにしました。

## annotation を表示する

`chartjs-plugin-annotation.js` はチャート内にラインやボックスタイプの注釈を加えることができるプラグインで、ラインチャート・棒グラフ・バブルチャート等に対応しています。
円グラフなどの軸を 2 つ持たないチャートには使用できないので、そこは注意が必要です。

ラインチャートを使用する場合の例が下記のコードとなります。でーたは各自で用意してください。

```tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

export const Chart = () => {
  const options = {
    /*
    axesやtooltipなどの他のオプションがあればここに書く。
    */
    annotation: {
      annotations: [
        {
          type: 'line', // lineを描写したい場合、boxの場合はbox
          drawTime: 'afterDraw', // overrides annotation.drawTime if set
          borderColor: '#ced4da',
          borderWidth: 1,
          mode: 'vertical', // vertical or horizontal
          value: "2020/10/30", // x軸のどこにラインを引くか。この場合、x軸の2020/10/30上にラインが描写される。
          id: 'hline-left', // ユニークid
          scaleID: 'x', // オプションのscalesのxAxesのidがあれば、それを書く
          label: {
            backgroundColor: '#ced4da',,
            fontSize: 12,
            fontColor: '#ffffff',,
            xPadding: 5,
            yPadding: 5,
            cornerRadius: 8,
            position: 'top', // ライン上のどこに表示するか: top, bottom, left, right, center. Default below.
            xAdjust: 50, // ラインからx軸をどれだけ離すか
            yAdjust: 10, // チャート内でy軸のどこに表示するか
            enabled: true, // trueでラベルが表示される
            content: 'Left side', // ラベルの内容
            rotation: 90, // mode => vertical で90なので横向きになる。
          },
        },
        {
          type: 'line', // lineを描写したい場合、boxの場合はbox
          drawTime: 'afterDraw', // overrides annotation.drawTime if set
          borderColor: '#ced4da',
          borderWidth: 1,
          mode: 'vertical', // vertical or horizontal
          value: "2020/10/30", // x軸のどこにラインを引くか。この場合、x軸の2020/10/30上にラインが描写される。
          id: 'hline-right', // ユニークid
          scaleID: 'x', // オプションのscalesのxAxesのidがあれば、それを書く
          label: {
            backgroundColor: "#3A8AD0",
            fontSize: 12,
            fontColor: "#ffffff",
            xPadding: 5,
            yPadding: 5,
            cornerRadius: 8,
            position: 'top', // ライン上のどこに表示するか: top, bottom, left, right, center. Default below.
            xAdjust: -50,  // ラインからx軸をどれだけ離すか
            yAdjust: 10, // チャート内でy軸のどこに表示するか
            enabled: true, // trueでラベルが表示される
            content: 'Right side', // ラベルの内容
            rotation: 90, // mode => vertical で90なので横向きになる。
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={} options={options} plugins={[ChartAnnotation]} />
    </>
  );
};
```

`react-chartjs-2` にプラグインを渡す場合は配列の中にプラグインを入れる必要があります。この部分になります。

```tsx
<Line data={} options={options} plugins={[ChartAnnotation]} />
```

上記の例以外の `chartjs-plugin-annotation` のオプションは公式ドキュメントに記載されているので、そちらを参考にするといいかと思います。
今回は、同じ x 軸上の右側・左側で別々のラベルの表示をしてみました。アノテーションの数や value に応じて、チャートに合わせた様々なパターンの表示ができるのではないかと思います。

## まとめ

`chartjs-plugin-annotation` の簡単な使い方を紹介してみました。
Chart.js には様々なプラグインがあるので、Chart.js のみの機能で困ったときはプラグインを覗いてみるといいかと思います。

他のプラグインやアノテーションのその他のオプションは参考サイトより飛ぶことができます。

## 参考サイト

- [chart.js - plugins](https://github.com/chartjs/awesome#plugins)
- [chartjs-plugin-annotation.js](https://github.com/chartjs/chartjs-plugin-annotation)
