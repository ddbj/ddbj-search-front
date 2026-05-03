# DDBJ Search Frontend

DDBJ Searchのフロントエンドアプリケーション。

## 概要

- TypeScript / React 19 / Vite 8ベースのSPA
- ルーティングにTanStack Router、データ取得にTanStack Queryを利用
- UI開発にはStorybook、品質チェックにはVitestとOxcを利用する

## 開発環境

- `mise` を利用する
- Node.jsとpnpmの実行環境は `mise.toml` を基準に管理する

## 最小セットアップ

```bash
mise install
mise exec -- pnpm install
mise exec -- pnpm dev
```

ターミナルで `mise activate` を済ませていれば `pnpm ...` だけでも実行できるが、AIエージェント・クラウド・CIでは、シェル初期化に依存しない `mise exec -- pnpm ...` を優先する。

補助的な起動・確認コマンド:

- `mise exec -- pnpm dev:msw`: Mock Service Workerを有効にして起動
- `mise exec -- pnpm storybook`: Storybookを起動
- `mise exec -- pnpm build`: 本番ビルドを作成

詳しい開発手順、検証方針、完了条件は [docs/development-guide.md](./docs/development-guide.md) を参照する。

## プロジェクトのメモ

- ルートは `src/routes` 配下のfile-based routesで生成される
- HTMLエントリポイントは `index.html` の1つ
- APIドキュメントは TanStack Router の `/api-doc/` ルートで表示する
- `VITE_MSW=true` でローカルモックを有効にできる

## ドキュメント

- docs全体の入口は [docs/index.md](./docs/index.md) を参照する
- 日常開発で最初に確認する内容は [docs/development-guide.md](./docs/development-guide.md) にまとまっている
- 文書の編集方針や更新時の考え方は [docs/documentation-guide.md](./docs/documentation-guide.md) にまとまっている
