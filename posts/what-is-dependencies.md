---
title: 'Dependenciesとpnpm'
preface: 'Dependenciesの簡易的説明とpnpmでの管理について'
createdAt: '2023-03-09'
eyecatch: '/blog/monorepo-reactnative-forweb/duck_3d.png'
category: 'tech'
tags: ['pnpm']
isDraft: true
---

pnpm に乗り換えた際の依存関係まわりと dependabot のオプション allow で指定する依存関係を整理します。

## よく見る 3 つの Dependencies

久しぶりに Dependabot のオプションをいじろうとして [構成オプションのリスト](https://docs.github.com/ja/enterprise-cloud@latest/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)を見てると allow オプションで dependency-type が色々あったので気になりました。

よく見る 3 つの dependencies だけまとめると

- dependencies
  プロジェクトで使用するすべてのパッケージ。tarball や git の URL で特定することも可能。
- devDependencies
  本番環境やテスト環境では使用しない開発環境のみで使用するパッケージ。
- peerDependencies
  自分で作成したパッケージを公開するときに指定する。手動で追加する必要がある。

### depenadabot の dependency-type の指定

npm で指定できるのは 4 つ。

- direct
  すべての依存関係。
- all
  すべての依存関係。npm 以外では indirect のものも含む。
- production
  Production dependency group => dependencies
- development
  Development dependency group => devDependencies

**なぜ dependabot でパッケージのアップデートをしたいのか**

例えば、アプリケーション内で使用しているパッケージ A がパッケージ B を使用している場合、パッケージ B がセキュリティ的に脆いとアプリケーション自体にも脆弱性が生じてしまうので、
定期的に更新することが大切で、dependabot はパッケージの更新を知らせてくれます。

dependabot ではパッケージがアップデートされた場合、プルリクを作成したり GitHub Actions で自動的にマージさせることができます。

## pnpm での依存管理

### 参考にしたサイト

- [Configure dependabot.yml](https://docs.github.com/ja/enterprise-cloud@latest/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [npm package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
- [Difference between dependencies, devDependencies and peerDependencies](https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/)
- [Fast, disk space efficient package manager | pnpm](https://pnpm.io/ja/)
