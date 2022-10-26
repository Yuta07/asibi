---
title: 'GitHub ActionsでPlaywrightを動かす'
preface: 'PlaywrightをGitHub Actionsで動かせるようになるまで'
createdAt: '2022-07-01'
eyecatch: '/blog/github-actions-playwright/octopus_3d.png'
category: 'tech'
tags: ['GitHub Actions', 'Playwright']
---

Playwright は E2E テストのためのフレームワークで、 Chromium、Firefox や webkit といったモダンブラウザでテストすることが可能です。Node.js だけでなく Python、.NET や Java でも使用することができます。
[v1.22.0](https://github.com/microsoft/playwright/releases/tag/v1.22.0)からはコンポーネント単位のテストも書けるようになりました。

GitHub Actions は CI/CD プラットフォームであり、ビルド・テスト・デプロイのパイプラインを自動化できるツールです。

## Playwright のインストール

まずは Playwright をインストールしておきましょう。

```bash
npm i -D @playwright/test
# install supported browsers
npx playwright install
# Install Playwright browsers and dependencies
npx playwright install --with-deps
```

テストを実行する場合は下記のコマンドです。

```bash
npx playwright test
# オプションで --project をつければ、そのブラウザのみで実行できる
npx playwright test --project=firefox
```

## package.json にスクリプトを追加する

```json
"test:e2e": "npx playwright test",
```

これで yarn を使用している場合に `yarn test:e2e` でテストを実行することができるようになります。

## playwright.config.ts を作成して設定を追加する

Playwright のオプションを追加することで headless, viewport などを選択できたり、テストに使用するブラウザを選択することができるようになります。

[Playwright - Configuration](https://playwright.dev/docs/test-configuration)

```ts
import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry'
  }
}

export default config
```

playwright.config.ts に記述することでグローバルで設定を適用していますが、テストファイル毎に設定を書くことでオーバライドすることもできます。

```ts
// example.spec.ts
import { test, expect } from '@playwright/test'

// Run tests in this file with portrait-like viewport.
test.use({ viewport: { width: 600, height: 900 } })

test('my portrait test', async ({ page }) => {
  // ...
})
```

今回使用する playwright.config.ts の設定は下記のようになります。全てのテストに対するオプションとして use 内に指定して、テスト中に開発サーバを動かすために webServer オプションを指定しています。

GitHub Actions で動かすための最低限しか設定していないため、他のオプションを検討したい場合は [Playwright のドキュメント](https://playwright.dev/docs/api/class-testconfig)を参考にするといいと思います。

```ts
import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: 'tests/e2e', // tests/e2e フォルダ内のテストファイルを実行
  retries: process.env.CI ? 2 : 0, // テスト毎のリトライの回数
  webServer: {
    command: 'yarn dev', // 開発サーバを実行するためのコマンド
    url: 'http://localhost:3000/',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI // 既存のサーバを使用するか
  },
  use: {
    baseURL: 'http://localhost:3000/' // テストで相対 URL を使用するため
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium', ...devices['Desktop Chrome'] }
    }
  ]
}

export default config
```

GitHub Actions でテスト用にサーバを動かすためには別でサーバを用意しなければいけないことあるかと思いますが、Playwright では webServer オプションが用意されており、それを利用することで開発用サーバを動かしてくれます。

その場合は、CI 上の既存のサーバーを使用しないオプション `reuseExistingServer: !process.env.CI` を使用することが推奨されています。

また webServer オプションでは port もしくは url を指定することができますが、

- port が指定されている場合は `127.0.0.1:port` や `::1:port` が利用できるまでテストランナーは待機する
- url が指定されている場合はテスト実行前に 2xx、3xx、400、401、402、または 403 のレスポンスが返ってくるのを待機する

という違いがあります。

webServer で port を指定していなくても baseURL を指定していれば、そのポートを指定するようにできるため、特に指定する必要はありません。
例えば、`port: 8080` は `baseURL: http://localhost:8080` と同等の意味があります。

## GitHub Actions のワークフローを作成する

この設定に関しては、以前は Playwright から [microsoft/playwright-github-action@v1](https://github.com/microsoft/playwright-github-action)というアクションが提供されていましたが、現在は使用を推奨されておらず、下記のコマンドを利用した Playwright CLI を使用することが推奨されています。

[Playwright のドキュメント](https://playwright.dev/docs/next/cli#install-system-dependencies)ではコマンドに対する説明があるようです。

```bash
$ npx playwright install-deps # install dependencies for all browsers
$ npx playwright install-deps chromium # install dependencies for Chromium only
$ npx playwright install --with-deps chromium # install browsers and OS dependencies with a single command.
```

ワークフローに関しても [Playwright - GitHub Actions](https://playwright.dev/docs/next/ci#github-actions)内で用意されているので、そちらを基にして作成します。
例えば、 main ブランチに対するプルリクエスト時に動かしたい時は下記ワークフローのようになります。

コメントにしてありますが、Vercel などへのデプロイが 成功した段階でその環境でテストを実行させることもできるようです。
詳しくは[GitHub Actions on deployment](https://playwright.dev/docs/next/ci#github-actions-on-deployment)を参考にするといいかと思います。

```yml
name: CI

on:
  pull_request:
    branches:
      - main
  # deployment_status:

jobs:
  e2e:test:
    runs-on: ubuntu-latest
    # vercelへのデプロイがsuccessになってから実行する
    # if: github.event.deployment_status.state == 'success'
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: yarn install
      - name: Install Playwright
        run: npx playwright install --with-deps chromium
      - name: test e2e
        run: yarn test:e2e --project=chromium # chromium のみでテストを実行
        # env:
        #   PLAYWRIGHT_TEST_BASE_URL: ${{ github.event.deployment_status.target_url }}s
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report
```

ドキュメントを参考にすると、テスト実行時のステップは `yarn test:e2e` のみで大丈夫かと思われるのですが、実際に実行すると GitHub Acitons 上で下記のようなエラーが出る場合があります。

```bash
Looks like you launched a headed browser without having a XServer running.
Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright.
```

これはテストランナーで ubuntu を指定して、ヘッドレスでブラウザのテストを実行する（playwright.config.ts で headless を false にしている）場合に生じるケースのようです。
ディスプレイが存在しない場合でも、 GUI が必要なソフトウェアを使用するために xvfb を指定する必要があるようです。

そのため、今回は `yarn test:e2e` の前に `xvfb run`を指定しています。

また、テスト実行がタイムアウトしてしまい、GitHub Actions 上でエラーが出てしまう場合は playwright.config.ts にてタイムアウトのデフォルト値を変更する設定を書けばいいでしょう。
タイムアウトに関する設定は[Playwright - Timeout](https://playwright.dev/docs/test-timeouts)に記載があります。
他にも 1 つのテストファイル内でテストが複数存在する場合はファイルを分割したり、テストファイル上で

```ts
test.describe.configure({ mode: 'parallel' })
```

を記述することで、そのテストファイル内のテストを並列に実行できるようになるみたいです。

ここまでで Playwright のテストを GitHub Actions 上で実行することができたかと思います。

## 参考サイト

- [Playwright](https://playwright.dev/)
- [Playwright - GitHub Actions](https://playwright.dev/docs/next/ci#github-actions)
- [Playwright - Timeouts](https://playwright.dev/docs/test-timeouts)
- [Playwright - Advanced: configuration](https://playwright.dev/docs/next/test-advanced)
