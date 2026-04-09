# DDBJ Search Frontend

DDBJ Search のフロントエンドアプリケーションです。

## 概要

- TypeScript / React 19 / Vite 8 ベースの SPA
- ルーティングは TanStack Router、データ取得は TanStack Query を利用
- UI 開発では Storybook、品質チェックでは Vitest と Oxc を利用

## 要件

- Node.js `>=22.12.0 <23`
- pnpm `10.28.2`

## 最小セットアップ

```bash
pnpm install
pnpm dev
```

補助的な起動・確認コマンド:

- `pnpm dev:msw`: Mock Service Worker を有効にして起動
- `pnpm storybook`: Storybook を起動
- `pnpm build`: 本番ビルドを作成

詳しい開発手順、検証方針、完了条件は [docs/development-guide.md](./docs/development-guide.md) を参照してください。

## プロジェクトのメモ

- ルートは `src/routes` 配下の file-based routing で生成されます
- HTML エントリポイントは `index.html` と `api-doc/index.html` の 2 つです
- `VITE_MSW=true` でローカルモックを有効化できます

## ドキュメント

- docs 全体の入口は [docs/index.md](./docs/index.md) を参照してください
- 日常開発で最初に確認する内容は [docs/development-guide.md](./docs/development-guide.md) にまとまっています
- 文書の編集方針や更新時の考え方は [docs/documentation-guide.md](./docs/documentation-guide.md) にまとまっています
