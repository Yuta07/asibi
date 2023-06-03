---
title: 'Web Components の基本とそれっぽいコンポーネント作成'
preface: 'Web Components でそれっぽいコンポーネントを作成する'
createdAt: '2022-07-18'
eyecatch: '/blog/web-components/cupcake_3d.png'
category: 'tech'
tags: ['Web-Components']
isDraft: false
---

## Web Component とは

再利用可能な要素を作成して、様々なウェブアプリ上で再利用できるもので、カプセル化された機能を使用することで、コードの重複なく再利用可能となります。
ブラウザ対応状況は現時点（2022/08/20）では、Firefox (バージョン 63)、Chrome、Opera、Edge (バージョン 79)のブラウザで対応しているみたいです。ただ、Safari では限定的な対応のようです。

## 実装の流れ

Web コンポーネントの基本的な実装の流れは[MDN - Web_Components](https://developer.mozilla.org/ja/docs/Web/Web_Components)によると以下のようになります。

1. ウェブコンポーネントの機能を明示したクラスもしくは関数を作成する。ECMAScript 2015 のクラス構文に従う必要がある。
2. 作成したカスタム要素を登録する。[CustomElementRegistry.define()](https://developer.mozilla.org/ja/docs/Web/API/CustomElementRegistry/define) メソッドに、要素の名前、機能が明示されているクラスもしくは関数、またオプションでどの要素を継承するかを渡す。
3. 必要なら [Element.attachShadow()](https://developer.mozilla.org/ja/docs/Web/API/Element/attachShadow)  メソッドを使って、シャドウ DOM をカスタム要素に紐付ける。
4. 必要なら [<template>](https://developer.mozilla.org/ja/docs/Web/HTML/Element/template) と [<slot>](https://developer.mozilla.org/ja/docs/Web/HTML/Element/slot) を使って、HTML テンプレートを定義する。
5. ページ内の好きな場所で、通常の HTML 要素のようにカスタム要素を使用する。

ウェブコンポーネントは以下の 3 つの主要な技術から構成されています。組み合わせることでカプセル化された機能を持った再利用可能なカスタム要素の作成が可能となります。

## 1. カスタム要素<Custom Element>

カスタム要素とその動作を定義する JavaScript API。`CustomElementRegistry` オブジェクトによりカスタム要素を制御することで、ページへカスタム要素を登録したり、どのようなカスタム要素が登録されているのかを返したりできます。

ページにカスタム要素を登録するには、 [CustomElementRegistry.define()](https://developer.mozilla.org/ja/docs/Web/API/CustomElementRegistry/define) を使用して、引数に以下の 3 つをとります。

- 要素に与える名前を表す `DOMString` 、名前はケバブケースであること。
- 要素の振る舞いを定義したクラスのオブジェクト
- `extends`  プロパティを含むオプションオブジェクト（オプション）

例えば、 `link-text-standard` というシンプルなリンクテキストを作成するだけのコンポーネントは下記のようになります。

```html
<!-- link-text-standard という名前のHTMLテンプレート -->
<link-text-standard></link-text-standard>
<link-text-standard anchor="Apple homepage" href="https://www.apple.com/jp/"></link-text-standard>
<link-text-standard
  anchor="Mozila web component page"
  href="https://developer.mozilla.org/ja/docs/Web/Web_Components"
></link-text-standard>
```

```js
class LinkTextStandard extends HTMLElement {
  // constructor では常に super を最初に呼び出す
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('p')
    wrapper.setAttribute('class', 'wrapper')
    wrapper.innerText = 'Here we will add a link to the'

    const link = wrapper.appendChild(document.createElement('a'))
    link.setAttribute('class', 'anchor')
    link.setAttribute('tabindex', '0')

    let hrefText = ''
    if (this.hasAttribute('href')) {
      hrefText = this.getAttribute('href') || ''
    } else {
      hrefText = 'https://www.mozilla.org/'
    }

    link.setAttribute('href', hrefText)

    let anchorText = ''
    if (this.hasAttribute('anchor')) {
      anchorText = this.getAttribute('anchor') || ''
    } else {
      anchorText = 'Mozilla homepage'
    }

    link.innerHTML = anchorText

    // 必要であればスタイルの追加をする
    const style = document.createElement('style')
    style.textContent = `
      .wrapper {}

      .link {}
    `

    shadow.append(style)
    shadow.append(wrapper)
  }
}

// link-text-standard というコンポーネント
customElements.define('link-text-standard', LinkTextStandard)
```

こちらを実行すると `link-text-standart` にて受け取った `anchor` `link` を `a` 要素として表示します。

[GitHub - ソースコード](https://github.com/Yuta07/web-components-beginner/tree/main/link-text-standard)

## 2. シャドウ DOM

カプセル化された「シャドウ」 DOM ツリーを要素に紐付け、関連する機能を制御する JavaScript API

シャドウ DOM ツリーはメインの DOM とは別にレンダリングされるため、マークアップ構造・スタイル・動作・要素の機能を公開せずに済み（カプセル化）、コードの重複やクラッシュを心配することがなくなります。

シャドウ DOM により、通常の DOM ツリーの要素の下に隠れた DOM ツリーを取り付けることができ、シャドウ DOM には通常の DOM ツリーと同様に任意の要素を追加できます。

以下、シャドウ DOM における用語と MDN のシャドウ DOM の画像になります。

- **シャドウホスト**: シャドウ DOM が取り付けられた、通常の DOM ノード
- **シャドウツリー**: シャドウ DOM の中にある DOM ツリー
- **シャドウ境界**: シャドウ DOM と通常の DOM の境界
- **シャドウルート**: シャドウツリーの根ノード

![[出典元]MDN - シャドウ DOM の使用](/blog/web-components/shadowdom.svg)

シャドウ DOM 内のノードには、外の何かに影響を与えることなく（カプセル化）、子を追加したり、属性を設定したり、 `element.style.~~~` を使用して個々のノードのスタイル設定が可能です。

任意の要素にシャドウルートを取り付けるには `Element.attatchShadow()` メソッドを使用する必要があります。

オプションとして `mode` オプションを open もしくは closed で受け取ります。

```js
// open の場合は、シャドウ DOM にメインページに書かれた JavaScript からアクセスできる
let shadow = elementRef.attachShadow({ mode: 'open' })

// closedで取り付けた場合、外部からシャドウ DOM にアクセスできなくなり、ShadowRootはnullを返す
let shadow = elementRef.attachShadow({ mode: 'closed' })
```

スタイルの指定は `<style>` を指定して内部で直接適用することもできますが、 `<link>` 要素を使用して外部から読み込むこともできます。

```js
// 外部スタイルシートをシャドウ DOM に適用
const linkElem = document.createElement('link')
linkElem.setAttribute('rel', 'stylesheet')
linkElem.setAttribute('href', 'style.css')

// 生成された要素をシャドウ DOM に添付
shadow.appendChild(linkElem)
```

`<link>` 要素はシャドウルートの描画をブロックしないので、スタイルシートのロード中にスタイル付けされていないコンテンツ (FOUC) が一瞬表示されるかもしれません。

## 3. HTML テンプレート

- [<template>](https://developer.mozilla.org/ja/docs/Web/HTML/Element/template)  と [<slot>](https://developer.mozilla.org/ja/docs/Web/HTML/Element/slot) 要素によって、レンダリングされたページ内に表示されないマークアップのテンプレートを書くことができます。JavaScript で参照を取得し、 DOM に追加することで表示できます。
  ウェブコンポーネントと組み合わせることで、テンプレート `<template>` 内のスタイル情報を  [<style>](https://developer.mozilla.org/ja/docs/Web/HTML/Element/style) 要素に含めて、カスタム要素内にカプセル化されます。

  ```js
  // HTMLテンプレート
  <template id="my-paragraph">
    <style>
      p {
        color: white;
        background-color: #666;
        padding: 5px;
      }
    </style>
    <p>My paragraph</p>
  </template>

  // ウェブコンポーネントとして定義
  customElements.define('my-paragraph',
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById('my-paragraph');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'})
          .appendChild(templateContent.cloneNode(true));
      }
    }
  );

  // HTMLに次のように追加することで利用
  <my-paragraph></my-paragraph>
  ```

**slot を利用することでさらに柔軟性を強化できる**

[<slot>](https://developer.mozilla.org/ja/docs/Web/HTML/Element/slot) 要素を使用することで、各要素のインスタンスに異なるテキストを表示することを宣言的に行えます。

`<slot>` は `name` 属性で識別され、テンプレート内にプレイスホルダーを定義できます。
`<slot>` が定義されていなかったり、ブラウザが `<slot>` に対応していない場合は代替内容である「既定のテキスト」が入るようになっています。

`<slot>` 要素自体は、 `<div>` 要素内で使用することも可能ですが、既にレンダリングされた要素に基づいてパターンを定義する必要があることはほとんどないこと、コンテナーの目的がより明確になることから、一般的には  `<template>` 要素内にスロットを追加する方がより実用的です。

`<slot>` を用いて簡単なリストを表示するコンポーネントの例です。

```html
<!-- HTMLテンプレート -->
<template id="list-template">
  <div class="template-card">
    <p class="template-img-flame">
      <!-- element-img という name に対応する slot 属性を持つ要素がここに表示される -->
      <slot name="element-img"></slot>
    </p>
    <div>
      <!-- element-name と element-description という name に対応する slot 属性を持つ要素がここに表示される -->
      <slot name="element-name">animal name</slot>
      <slot name="element-description">animal description</slot>
    </div>
  </div>
</template>

<list-template-card>
  <!-- slot 属性に対応するnameを指定する -->
  <img slot="element-img" src="./hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg" alt="white-bear" class="template-img" />
  <h2 slot="element-name" class="template-name">White Bear</h2>
  <p slot="element-description" class="template-description">しろくま</p>
</list-template-card>
<list-template-card>
  <img slot="element-img" src="./manja-vitolic-gKXKBY-C-Dk-unsplash.jpg" alt="dog" class="template-img" />
  <h2 slot="element-name" class="template-name">Cat</h2>
  <p slot="element-description" class="template-description">ねこ</p>
</list-template-card>
<list-template-card>
  <img slot="element-img" src="./pauline-loroy-U3aF7hgUSrk-unsplash.jpg" alt="dog" class="template-img" />
  <h2 slot="element-name" class="template-name">Dog</h2>
  <p slot="element-description" class="template-description">いぬ</p>
</list-template-card>
```

```js
class ListTemplate extends HTMLElement {
  constructor() {
    super()

    let template = document.getElementById('list-template')

    const templateContent = template?.content

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(templateContent.cloneNode(true))
  }
}

// list-template-card コンポーネントとして再利用可能とする
customElements.define('list-template-card', ListTemplate)
```

スタイルを加えた完全なコードは下記の URL にあり、実行するとこのようになります。

![list-template.png](/blog/web-components/list-template.png)

[GitHub - ソースコード](https://github.com/Yuta07/web-components-beginner/tree/main/list-template)

### ライフサイクル

ウェブコンポーネントにはライフサイクルコールバックが用意されており、ライフサイクルで実際の更新を処理することで様々な変更を適用することができます。

- `connectedCallback` Document に接続された要素にカスタム要素が追加されるたびに呼び出されます。ノードが移動するために発生するため、要素の内容が完全に解釈される前に発生することもあります。また、要素の接続が終了したときにも呼び出されることがあるので注意が必要です。
- `disconnectedCallback` カスタム要素が Document の DOM から切断されるたびに呼び出されます。
- `adoptedCallback` カスタム要素が新しい Document に移動するたびに呼び出されます。
- `attributeChangedCallback` カスタム要素の属性の 1 つが追加、削除、変更されるたびに呼び出されます。 `static get observedAttributes()` メソッドでどの属性の変更が通知されたかを指定可能です。

例えば、 `input` 要素からフォーカスが外れた時に入力されていない場合に、エラー文と枠線の色を赤くするコンポーネントを作成すると下記のようになります。

```html
<!-- HTMLテンプレート -->
<template id="input-lifecycle-template">
  <div class="input-container">
    <div class="input-field">
      <!-- 各 name に対応する slot 属性を持つ要素がここに表示される -->
      <slot name="input-label"></slot>
      <slot name="input-template"></slot>
      <slot name="error-text"></slot>
    </div>
  </div>
</template>

<input-with-lifecycle px="8" py="12">
  <!-- slot 属性に対応するnameを指定する -->
  <label slot="input-label">LifeCycle Label</label>
  <input slot="input-template" name="lifecycle" placeholder="Input..." class="input-lifecycle" />
  <p slot="error-text" class="error"></p>
</input-with-lifecycle>
```

```js
class InputLifeCycle extends HTMLElement {
  constructor() {
    super()

    let template = document.getElementById('input-lifecycle-template')
    const templateContent = template?.content

    const shadow = this.attachShadow({ mode: 'open' })

    let style = document.createElement('style')
    // ::slotted(p) とすることで slot の要素にスタイルの適用が可能となる
    style.textContent = `
      ::slotted(p) {
        font-size: 14px;
        color: red;
      }

      ::slotted(label) {
        font-size: 14px;
      }
    `

    shadow.appendChild(style)
    shadow.appendChild(templateContent.cloneNode(true))
  }

  connectedCallback() {
    // Document に接続された 時に updateStyle を呼び出す
    updateStyle(this)
  }
}

// input-with-lifecycle コンポーネントとして再利用可能とする
customElements.define('input-with-lifecycle', InputLifeCycle)

function updateStyle(elem) {
  const shadow = elem.shadowRoot

  const style = shadow?.querySelector('style')

  if (style == null) return

  // input-with-lifecycle の px / py 属性を取得して適用する
  style.textContent += `
    ::slotted(input) {
      padding: ${elem.getAttribute('px')}px ${elem.getAttribute('py')}px !important;
      border: 1px solid #b2b2b2;
      border-radius: 4px;
      font-size: 16px
    }
  `
}

// input / error の両要素を取得
const input = document.querySelector('.input-lifecycle')
const error = document.querySelector('.error')

// input からフォーカスが外れた時に呼び出される
input.onblur = function () {
  const inputValue = input?.value

  // テキストが入力されていなければ、エラーメッセージとスタイルを適用
  if (!inputValue) {
    input.style.borderColor = 'red'
    error.innerHTML = '入力してください'
    error.style.display = 'block'
    error.style.marginTop = '4px'
  } else {
    input.style.borderColor = '#b2b2b2'
    error.innerHTML = ''
    error.style = ''
  }
}
```

[GitHub - ソースコード](https://github.com/Yuta07/web-components-beginner/tree/main/input-lifecycle)

### 参考にしたサイト

- [ウェブコンポーネント | MDN](https://developer.mozilla.org/ja/docs/Web/Web_Components)
- [GitHub - MDN/web-components-examples](https://github.com/mdn/web-components-examples)
