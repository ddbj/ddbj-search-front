# 開発ガイド

## この文書の役割

この文書は、日常開発で参照する運用ルールの正本です。

`README.md` には入口としての要約だけを置き、詳細な運用ルールはこの文書に集約します。

## 開発環境

- Node.js `>=22.12.0 <23`
- `packageManager` に指定された `pnpm@10.28.2` を利用する
- 依存関係のインストールは `pnpm install` を利用する

## 日常的に使うコマンド

- `pnpm dev`: アプリを起動する
- `pnpm dev:msw`: Mock Service Worker を有効にして起動する
- `pnpm storybook`: Storybook を起動する
- `pnpm build`: TypeScript ビルド後に本番アセットを生成する
- `pnpm preview`: 本番ビルドをローカル確認する

## 品質ツール

このリポジトリでは Oxc を標準の品質ツールとして使います。

- `pnpm format`: コードやドキュメントを整形する
- `pnpm lint`: lint を実行する
- `pnpm type-check`: 型チェックを実行する
- `pnpm test`: unit test を実行する

Oxc の formatter を正として扱うため、import 順などは Oxc の出力に従います。

## 作業開始時の確認

コードや設定に影響する変更を始める前は、必要に応じて現状確認を行います。

基本の確認コマンド:

```bash
pnpm lint
pnpm test
pnpm type-check
```

目的:

- 変更前から壊れている箇所がないか把握する
- 作業後の失敗と既存不具合を切り分ける

## 検証方針

### 原則

- 変更内容に応じて、必要な検証だけを実行する
- 実行した検証と、あえて省略した検証の理由を共有する

### ドキュメントのみの変更

- ドキュメント変更時の扱いは `docs/documentation-guide.md` を参照する

### コード変更を含む場合

最低限の確認:

```bash
pnpm lint
pnpm test
pnpm type-check
```

必要に応じて追加する確認:

- `pnpm build`: 本番ビルドへの影響を確認する
- `pnpm test:storybook`: Storybook 設定、story、decorator を変更した場合に実行する
- `pnpm build-storybook`: Storybook の addon、framework、builder を変更した場合に実行する
- `pnpm dev:msw`: mock やエラー系 UI の確認が必要な場合に実行する

## 変更後の整え方

- 編集後は必要に応じて `pnpm format` を実行する
- 実行した検証結果は、完了報告時に共有する
- ドキュメントや運用ルールを変えた場合は、関連文書も更新する

## 完了条件

タスク完了時には、少なくとも以下を満たす。

- 依頼された変更が反映されている
- 変更内容に見合った検証が完了している
- 検証を省略した場合は理由が説明できる
- 必要なら整形が実施されている
- 自動生成ファイルに関わる変更がある場合、下記「自動生成されたファイルの扱い」に沿っている
- 関連ドキュメントの更新が必要なら反映されている

## 自動生成されたファイルの扱い

- 自動生成されたファイルは手書きの正本ではなく、派生物として扱う
- 自動生成されたファイルだけを直接直すのは、その保守が目的のときに限る
- ソース変更に再生成が必要なら、生成差分も同じ変更に含める
- 作業開始前から自動生成されたファイルに差分や破損がある場合は、その状態を明示する

## 用途別の参照先

- ドキュメントの書き方を確認したいとき:
  - `docs/documentation-guide.md`
- コード規約を確認したいとき:
  - `docs/code-style.md`
- テスト・lint 方針を確認したいとき:
  - `docs/testing-policy.md`
- 命名規約を確認したいとき:
  - `docs/naming-convention.md`

## リポジトリ構成の目安

- `src/routes`: TanStack Router の file-based routes
- `src/layout`: ページレベルの layout
- `src/features`: 機能単位の UI とロジック
- `src/api`: OpenAPI 由来の定義や API 型
- `src/fetch`: fetcher と関連ユーティリティ
- `.storybook`: Storybook 設定

## ビルドに関するメモ

- `pnpm build` は `tsc -b` のあとに `vite build` を実行する
- Vite のビルドでは、メインアプリと API ドキュメントの 2 つの entrypoint を出力する
- `vite-tsconfig-paths` は、現時点では TanStack Router の split route と相性問題があるため維持している
