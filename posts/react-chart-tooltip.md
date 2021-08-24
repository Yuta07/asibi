---
title: 'React + Chart.jsでカスタムツールチップ'
date: '2020-10-30'
image: '/blog/react-chart-tooltip/tooltip.svg'
tag: 'dev'
---

## はじめに

React で Chart.js を使用するために `react-chartjs-2` をインストールします。

```bash
npm install --save react-chartjs-2 chart.js

or

yarn add react-chartjs-2 chart.js
```

TypeScript を利用している場合は型定義をインストールする必要があります。

```bash
npm install --save-dev @types/chart.js

or

yarn add -D @types/chart.js
```

これで React で Chart.js を使用する準備が整いました 👏

## ツールチップを表示する

まずはチャートを表示できるようにします。チャートの種類はなんでもいいですが、今回はラインチャートを使用。
今回はツールチップがメインなので、データの用意は飛ばします。

```tsx
import React from 'react'
import { Line } from 'react-chartjs-2'

export const Chart = () => {
  // data => https://www.chartjs.org/docs/latest/charts/line.html#data-structure
  // options => レイアウトやツールチップのオプションをここに書く
  // plugins => プラグインを利用している場合はここに書く

  return (
    <>
      <Line data={} options={} plugins={} />
    </>
  )
}
```

ツールチップを表示するためには、オプションに記述する必要があります。

[Chart.js - docs/tooltip/Label Callback](https://www.chartjs.org/docs/latest/configuration/tooltip.html#label-callback)

```tsx
import React from 'react'
import { ChartOptions } from 'chart.js'
import { Line } from 'react-chartjs-2'

export const Chart = () => {
  const options: ChartOptions = {
    /*
    他のオプションがあれば、ここに書きます。
    */
    tooltips: {
      /*
      ツールチップで他のオプションを追加したければ、ここに書きます。
      ex)
      position: 'average',
			mode: 'index',
      */
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || ''

          if (label) {
            label += ': '
          }
          label += Math.round(tooltipItem.yLabel * 100) / 100
          return label
        },
        labelColor: function (tooltipItem, chart) {
          return {
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgb(255, 0, 0)'
          }
        },
        labelTextColor: function (tooltipItem, chart) {
          return '#543453'
        }
      }
    }
  }

  return (
    <>
      <Line data={} options={options} plugins={} />
    </>
  )
}
```

基本的なツールチップの表示であれば、これだけで事足りるかと思います。

## カスタマイズする

カスタムツールチップの表示をする場合は、 `callbacks` の部分を `custom` にする必要があります。カスタマイズの全体は下記のようになります。

```typescript
const options: ChartOptions = {
  /*
    他のオプションがあれば、ここに書きます。
    */
  tooltips: {
    // Disable the on-canvas tooltip
    enabled: false,
    custom: function (tooltipModel: any) {
      // ルールチップのidを取得する。
      let tooltipEl = document.getElementById('chartjs-tooltip')

      // idが見つからなかったらエレメントを作成してbody直下に置く。
      if (!tooltipEl) {
        tooltipEl = document.createElement('div')
        tooltipEl.id = 'chartjs-tooltip'
        tooltipEl.innerHTML = '<table></table>'
        document.body.appendChild(tooltipEl)
      }

      // ツールチップがないなら隠す。
      if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = '0'
        return
      }

      // Set caret Position
      tooltipEl.classList.remove('above', 'below', 'no-transform')
      if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign)
      } else {
        tooltipEl.classList.add('no-transform')
      }

      // ツールチップに表示するデータを取得
      function getBody(bodyItem: any) {
        return bodyItem.lines
      }

      // ツールチップ内のテキストをセットする。
      if (tooltipModel.body) {
        const titleLines = tooltipModel.title || []
        const bodyLines = tooltipModel.body.map(getBody)

        let theadStyle = `font-size: 12px; color: #000000;`
        let innerHtml = '<thead style="' + theadStyle + '">'

        titleLines.forEach(function (title: string) {
          innerHtml += '<tr><th>' + title + '</th></tr>'
        })
        innerHtml += '</thead><tbody>'

        bodyLines.forEach(function (body: any) {
          const spanStyle = `background: #27ae60; width: 8px; height: 8px; position: absolute; top: 4px; left: 0;`
          const span = '<span style="' + spanStyle + '"></span>'
          const tDataStyled = 'padding-left: 15px; position: relative;'
          innerHtml += '<tr><td style="' + tDataStyled + '">' + span + body + '</td></tr>'
        })
        innerHtml += '</tbody>'

        let tableRoot = tooltipEl.querySelector('table')

        // 作成したツールチップの内容をテーブルに挿入する。
        tableRoot.innerHTML = innerHtml

        // chartとして表示されているcanvas要素のclassを取得する
        const chartMonitor = document.getElementsByClassName('chartjs-render-monitor')

        tooltipEl.style.opacity = '1'
        tooltipEl.style.position = 'absolute'
        tooltipEl.style.left =
          chartMonitor[0].getBoundingClientRect().left + window.pageXOffset + tooltipModel.caretX + 'px'
        tooltipEl.style.top =
          chartMonitor[0].getBoundingClientRect().top + window.pageYOffset + tooltipModel.caretY + 'px'
        tooltipEl.style.fontSize = '12px'
        tooltipEl.style.color = '#616e81'
        tooltipEl.style.background = '#ffffff'
        tooltipEl.style.filter = 'drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.2))'
        tooltipEl.style.padding = '10px 15px'
        tooltipEl.style.pointerEvents = 'none'
      }
    }
  }
}
```

基本的にはドキュメントに書いてある通りにすれば、ツールチップのカスタムは可能です。
また、データの形が単純な数値でなくても、`bodyLines` 内の工夫次第で簡単にツールチップ内のテキストを表示できるかと思います。

## 参考サイト

- [Chart.js](https://www.chartjs.org/)
- [Chart.js - docs/tooltip](https://www.chartjs.org/docs/latest/configuration/tooltip.html)
- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)
