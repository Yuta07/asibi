---
title: 'GitHub Actionsのドキュメントを読んで基本をまとめる'
preface: '初学者のためのGitHub Actions'
createdAt: '2022-06-30'
category: 'tech'
tags: ['GitHub Actions']
---

ほぼ自分のために GitHub Actions の基本をまとめた。

[GitHub Actions ドキュメント - クイックスタート](https://docs.github.com/ja/actions/quickstart)

GitHub Actions は CI/CD プラットフォームであり、ビルド・テスト・デプロイのパイプラインを自動化できる。

つまり、プルリクエストに対してビルド・テストのワークフローを作成したり、本番環境へのデプロイをできたりする。

ワークフローには直列、もしくは並列で実行できる 1 つ以上のジョブが含まれる。

ジョブは仮想マシンランナー、またはコンテナー内で実行され、定義したスクリプトを実行するか、アクションを実行する 1 つ以上のステップが存在する。

# 基本用語

## workflow

ワークフローは 1 つ以上のジョブ（ `setup` や `build` 、 `test` など ）を実行する自動プロセスのこと。 `YAML` ファイルによって定義され、リポジトリ内のイベントによってトリガーされた時に実行される。

ジョブはデフォルトで並列に実行されるが、 `needs: [job-name]` を記述することで `job-name` が成功したかに依存させることができる。

```yaml
setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

ワークフローは `.github/workflows` で定義され、複数のワークフローを含めることができ、それぞれ異なるタスクを実行できる。

ワークフローに必要なのは

1. ワークフローをトリガーする 1 つ以上のイベント
2. ランナーマシンで実行される 1 つ以上のジョブ
3. 定義したスクリプトを実行するか、アクションを実行できるステップ

トリガーは、プッシュが行われた時・リリースが作成された時に実行させるようなイベントのこと

### ワークフローでシークレットを使用

[シークレットについて](https://docs.github.com/ja/actions/security-guides/encrypted-secrets)

パスワードや証明書などの機密データを使用する場合は、GitHub にシークレットとして保存すると、環境変数として使用できる。

```yaml
jobs:
	steps:
		- name: Retrieve secret
		  with: # Set the secret as an input
	      super_secret: ${{ secrets.SuperSecret }}
	    env: # Or as an environment variable
	      super_secret: ${{ secrets.SuperSecret }}
	    run: |
		    example-command "$super_secret"
```

`Organization` レベルで保存されたシークレットであれば複数のリポジトリ間でシークレットを共有できる。ポリシーを使用すれば、シークレットにアクセスできるリポジトリの制限も可能

**シークレットのルール**

- シークレット名には英数字（`[a-z]`、`[A-Z]`、`[0-9]`）または下線（`_`）のみ
- シークレット名の最初を  `GITHUB_` プレフィックスにはできない
- 大文字と小文字を区別しない
- 一意である必要がある → Organization レベルとリポジトリレベルで同じ名称のシークレットがあれば、リポジトリレベルのシークレットが優先される

リポジトリのシークレットは `Settings -> Secrets -> **New repository secret**`

環境ごとのシークレットは `Settings -> Environments`

### マトリックスの使用

マトリックスでは、単一のジョブ定義で変数を使用して、変数の組み合わせに基づく複数のジョブ実行を自動的に作成できる。 `strategy` を使用することで可能で、キーワードの分のジョブが実行される。

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node }}

# ---
# この場合はversionとosという2つの変数があるということになる
# {version: 10, os: ubuntu-latest}
# {version: 10, os: windows-latest}
strategy:
	matrix:
	  version: [10, 12, 14]
    os: [ubuntu-latest, windows-latest]
```

さらに詳しくは [マトリックスについて](https://docs.github.com/ja/actions/using-jobs/using-a-matrix-for-your-jobs) に書いてある

### 依存関係のキャッシング

キャッシュが作成されると、同じリポジトリ内のすべてのワークフローで使用できるようになる。

`npm` や `yarn` などのパッケージ及び依存関係管理ツールは、依存関係のローカルキャッシュを保持する。GitHub でホストされているランナーのジョブは、クリーンな仮想環境で開始され、毎回依存関係をダウンロードする必要があるため、ネットワーク使用率が増加し、実行時間が長くなり、コストが増加するので、一意のキーで識別されるキャッシュを作成・復元して使用するのがいいとされる。

現在のブランチ、ベースブランチ、デフォルトブランチで作成されたキャッシュは、どの Pull Request からもアクセスできる。

`cache` の入力パラメータには以下のものがある。

- `key`
  - 必須。キャッシュの保存時に作成され、キャッシュの検索に使われる。
- `path`
  - 必須。キャッシュまたは復元するランナー上のパス。絶対パスかワークスペースディレクトリからの相対パスが指定可能。
- `restore-keys`
  - オプション。復元キーを含む文字列で `key` によるキャッシュがヒットしない場合、順番に使用される。

`cache` の出力パラメータには `cache-hit` があり、キーの完全一致が見つかったことを示す `boolean` である。

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Cache node modules
        id: cache-npm
        uses: actions/cache@v3
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-
			# 既存のキャッシュと一致すれば、キャッシュされたファイルを復元する
			# 一致しない場合は、restore-keysにマッチすれば、pathディレクトリ中のキャッシュにリストアする
			# マッチしなければ、部分一致を検索して最も最近のキャッシュがpathディレクトリにリストアされる
      # ジョブが正常に完了すると新しいキャッシュが自動的に作成される
			- if: ${{ steps.cache-npm.outputs.cache-hit == 'false' }}
        name: List the state of node modules
        continue-on-error: true
        run: npm list
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm build
      - name: Test
        run: npm test
```

7 日間以上アクセスされていないキャッシュエントリは削除される。

さらに詳しくは[依存関係のキャッシング](https://docs.github.com/ja/actions/using-workflows/caching-dependencies-to-speed-up-workflows)に書いてある

[github actions cache example](https://github.com/actions/cache/blob/main/examples.md#node---yarn)

## event

イベントは、ワークフローの実行をトリガーするリポジトリ内の特定のアクティビティのこと。プルリクエストや Issue 作成・コミットがプッシュされたりすると、アクティビティが GitHub から発生することがある。

```yaml
on:
	# ラベルが作成されたとき
  label:
    types:
      - created
	# mainリポジトリ内のブランチにプッシュ or プルリクエストされたとき
  [push, pull_request]:
    branches:
      - main
	# # mainブランチとrelease/**を指定、プルリクエストされたとき
	pull_request:
    branches:
      - main
			- 'releases/**'
		# mona/octocatブランチは除外
		branches-ignore:
      - 'mona/octocat'
		# 特定のパスを指定できる、逆はpaths-ignore
		paths:
      - '**.js'
```

[利用可能なイベントリスト](https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows)

## job

ジョブは、同じランナー `runs-on` で実行されるワークフローの一連のステップのこと。ステップは順番に実行され、相互に依存している。各ステップは同じランナーで実行されるため、あるステップから別のステップにデータを共有できる。例えば、アプリケーションをビルドするステップの後に、ビルドされたアプリケーションをテストするステップを含めることができる。

Job は別の Job に依存させることができる

```yaml
# job1が正常終了してからjob2、job1/2が終了してからjob3
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

依存させる job の成功を必要としない場合

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
		# always()を使用することで、常に実行させる
		# ${{ }}を省略することもできる
    if: ${{ always() }}
    needs: [job1, job2]
```

## action

アクションは、GitHub Actions プラットフォーム用のカスタムアプリケーションのことで、頻繁に繰り返されるタスクを実行する。アクションを使用することで、ワークフローファイルに書き込む反復コードの量を減らすことができる。

ワークフローには、コミュニティによって作成されたアクションを含めることも、アプリケーションのリポジトリ内に直接独自のアクションを作成することもできる。

アクションの定義には 3 通りある。

- ワークフローファイルと同じリポジトリ
  同じリポジトリからアクションを参照する場合は、`{owner}/{repo}@{ref}` か `./path/to/dir`
  のどちらかで参照できる。

  ```yaml
  |-- hello-world (repository)
  |   |__ .github
  |       └── workflows
  |           └── my-first-workflow.yml
  |       └── actions
  |           |__ hello-world-action
  |               └── action.yml

  - uses: ./.github/actions/hello-world-action
  ```

- パブリックリポジトリ
  別のリポジトリ（パブリックリポジトリに限る）からアクションを追加する場合は、`{owner}/{repo}@{ref}` で参照できる。
  ```yaml
  uses: actions/setup-node@v3
  ```
- DockerHub で公開された Docker コンテナイメージ
  DockerHub でコンテナーを参照する場合は、 `docker://{image}:{tag}` で参照する。
  ワークフローで使用する前には DockerHub から Docker コンテナイメージの整合性を確認する。
  ```yaml
  uses: docker://alpine:3.8
  ```

GitHub マーケットプレイスは、GitHub コミュニティによって作成されたアクションを見つけるための場所のこと。ディレクトリのワークフローエディタでアクションをサイドバーから、直接検索および参照できる。

[アクションの検索とカスタマイズ](https://docs.github.com/ja/actions/learn-github-actions/finding-and-customizing-actions)

## runner

ランナーは、ワークフローがトリガーされたときにワークフローを実行するサーバーのことで、一度に 1 つのジョブを実行できる。各ワークフローの実行は、新しくプロビジョニングされた仮想マシンで実行される。

必要によっては独自のランナーをホスト可能。

> プロビジョニングとは、IT インフラストラクチャをセットアップするプロセスのこと。また、データとリソースへのアクセスを管理し、ユーザーとシステムによる利用を可能にするために必要なステップを指すこともある。単に「プロビジョニング」と言う場合も、その種類にはサーバープロビジョニング、ネットワーク・プロビジョニング、ユーザープロビジョニング、サービスプロビジョニングなど、さまざまなものがある。

[Red Hat - プロビジョニングとは](https://www.redhat.com/ja/topics/automation/what-is-provisioning)

# サンプルワークフロー

ワークフローの作成・実行には GitHub リポジトリが必要

1. `.github/workflows` をディレクトリに追加
2. 上記フォルダ内に `~~~.yml` というファイルを作成
3. ワークフローを記述する
4. 作成したワークフローのタイミングで実行される

```yaml
# ワークフローの名前
name: learn-github-actions
# ワークフローのトリガー、この例ではpushイベントでリポジトリにプッシュするか、
# プルリクエストをマージするたびにワークフローの実行がトリガーされる
# この例では、すべてのブランチへのプッシュによってトリガーされるが、特定のブランチを指定することも可能
on: [push]
# ワークフローで実行されるすべてのジョブをグループ化
jobs:
	# ジョブを定義して、ジョブのプロパティを定義
  check-bats-version:
		# GitHub によってホストされている仮想マシンで実行
    runs-on: ubuntu-latest
		# ジョブ check-bats-version で実行されるすべてのステップをグループ化
    steps:
			# usesはこのステップがactions/checkout@v3を使用することを指定
			# リポジトリをランナーにチェックアウトするアクションで、コードに対してスクリプトまたはその他のアクションを実行できるようにする
			# ワークフローがリポジトリのコードに対して実行されるときはいつでも、チェックアウトアクションを使用する必要がある
      - uses: actions/checkout@v3
			# アクションを使用して、指定されたバージョンのNode.jsをインストール、この例ではv14
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
			# ランナーでコマンドを実行するようにジョブに指示
			# この場合、bats ソフトウェアテストパッケージをインストール
      - run: npm install -g bats
			# ソフトウェアバージョンを出力するパラメータを指定して bats コマンドを実行
      - run: bats -v
```

bats は、Bash 用のテストフレームワークで、作成した UNIX プログラムが期待どおりに動作することを確認する簡単な方法を提供している。

[Bats-core: Bash Automated Testing System](https://github.com/bats-core/bats-core)

![overview-actions-event.png](/blog/github-actions-beginning/overview-actions-event.png)

ワークフローの結果はリポジトリ内の Actions から確認できる。
また、ログにて各ステップの処理をそれぞれ確認することができる。

# GitHub Actions の機能

## ワークフローでの環境変数の使用

GitHub Actions には、ワークフロー実行ごとのデフォルトの環境変数が含まれている。

```yaml
jobs:
  example-job:
    steps:
      - name: Connect to PostgreSQL
        # POSTGRES_HOST および POSTGRES_PORT という名前のカスタム変数が
        # node client.js スクリプトで使用可能であるということ
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

## ワークフローにスクリプトを追加

```yaml
jobs:
  example-job:
    steps:
			# ランナーで npm install -g bats を実行する
      - run: npm install -g bats
		steps:
			# スクリプトをリポジトリに保存し、パスとシェルタイプを指定する
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

## ジョブ間でのデータ共有

コードをビルドしてテストするときに作成されるファイルである成果物を GitHub に保存できる。

成果物には、バイナリまたパッケージファイル、テスト結果、スクリーンショット、ログファイルなどがあり、ワークフローでの実行に関連づけられているため、別のジョブでも使用できる。

成果物をアップロードするには `uses: actions/upload-artifact@v3`

```yaml
uses: actions/upload-artifact@v3
with:
	name: output-log-file
  path: output.log
```

別のワークフローの成果物のダウンロードには `uses: actions/download-artifact@v3`

```yaml
uses: actions/download-artifact@v3
with:
	name: output-log-file
```

同じワークフローの成果物のダウンロードは `needs: upload-job-name` でアップロードのジョブを指定してアップロードを待つ必要がある。

## 終わりに

GitHub Actions のドキュメントから基本的なことを抜き出してまとめてみた。
サンプルコードがいろいろ転がっているので参考にしつつ、内容把握のための用語の理解に関してはドキュメントを読めばなんとかなる。
