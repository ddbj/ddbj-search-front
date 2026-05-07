# 技術構成メモ

## この文書の役割

この文書では、このリポジトリで採用している主要ライブラリと技術構成への入口を示す。

- 何を使っているかを素早く把握する
- どのレイヤーでどの技術を使うかを確認する
- 詳細な設計判断が必要な場合は [docs/decisions/README.md](./decisions/README.md) を参照する
- 個別の設計判断そのものは、この文書に蓄積しない

## UI・スタイリング

- HeroUI（旧NextUI）
- Tailwind CSS
- clsx

## アイコン

- FontAwesome Pro
  - YOHAK社としてクライアント案件に使えるProライセンスを所持する
  - SVGをダウンロードし、コンポーネント化して使う

## ルーティング

- TanStack Router

## データフェッチ

- TanStack Query

## 状態管理

- Jotai

## バリデーション

- Zod

## 日時操作

- dayjs

## テスト

- Vitest
- Storybook
- MSW (Mock Service Worker)
- Playwright
  - Storybookテストをブラウザ上で動かすために使う

## APIドキュメント

- Scalar
- Zod to OpenAPI

## 外部API参考資料

- [DDBJ Search API behavior spec](https://github.com/ddbj/ddbj-search-api/blob/main/docs/api-spec.md)
- [DDBJ Search staging API docs](https://ddbj-staging.nig.ac.jp/search/api/docs)
- このリポジトリ内のAPIドキュメントは、ローカル起動時の `/search/api-doc/` で確認する

## 関連ドキュメント

- [docs/development-guide.md](./development-guide.md): 日常開発の手順、検証方針、完了条件
- [docs/naming-convention.md](./naming-convention.md): 命名規約と型・スキーマの接尾辞ルール
- [docs/decisions/README.md](./decisions/README.md): 個別の設計判断を残す場所
