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

- [docs/development-guide.md](./docs/development-guide.md): 開発手順、検証方針、完了条件
- [docs/naming-convention.md](./docs/naming-convention.md): 命名規約と型・スキーマの接尾辞ルール
- [docs/spec.md](./docs/spec.md): 採用ライブラリと技術構成のメモ
- [docs/domain-behavior.md](./docs/domain-behavior.md): 画面表示や download link に関するドメイン挙動
- [docs/document-inventory.md](./docs/document-inventory.md): ドキュメント棚卸しと移行マップ
