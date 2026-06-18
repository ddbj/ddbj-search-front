# 開発ガイド

## この文書の役割

この文書では、日常開発で参照する運用ルールを定める。

- `README.md` には入口としての要約だけを置き、詳細な運用ルールはこの文書で扱う

## 開発環境

- Node.jsとpnpmの実行環境は `mise.toml` を基準に管理する
- 初回セットアップでは `mise install` を実行する
- 依存関係のインストールは `mise exec -- pnpm install` を利用する
- ターミナルで `mise activate` を済ませていれば `pnpm ...` だけでも実行できる
- AIエージェント・クラウド・CIでは、シェル初期化に依存しない `mise exec -- pnpm ...` を優先する

この文書では、簡潔さのため、以降のコマンド例を `pnpm ...` と表記する。必要に応じて `mise exec -- pnpm ...` に読み替える。

## 日常的に使うコマンド

- `pnpm dev`: アプリを起動する
- `pnpm dev:msw`: Mock Service Worker を有効にして起動する
- `pnpm storybook`: Storybook を起動する
- `pnpm build`: TypeScript ビルド後に本番アセットを生成する
- `pnpm preview`: 本番ビルドをローカル確認する

## 品質ツール

このリポジトリでは、Oxcを標準の整形・lintツールとして使う。

- `pnpm format`: コードやドキュメントを整形する
- `pnpm lint`: lint を実行する
- `pnpm type-check`: 型チェックを実行する
- `pnpm test`: ユニットテストを実行する

Oxcのformatterを基準とするため、import順などの並びはOxcの出力に従う。

## 作業開始時の確認

コードや設定に影響する変更を始める前は、必要に応じて現状を確認する。

変更前の状態確認に使うコマンド例:

```bash
pnpm lint
pnpm test
pnpm type-check
```

目的:

- 変更前から壊れている箇所がないかを把握する
- 作業後の失敗と既存不具合を切り分ける

このコマンド例は、変更後の完了確認セットではない。変更後の検証は「検証方針」を基準にする。

## 検証方針

### 原則

- 変更内容に応じて、必要な検証だけを実行する
- 実行した検証と、あえて省略した検証の理由を共有する

### ドキュメントのみの変更

- ドキュメント変更時の扱いは [docs/documentation-guide.md](./documentation-guide.md) を参照する

### コード変更を含む場合の完了前確認

pre-commit hookに任せず、完了前確認として次を実行する。

```bash
pnpm format
pnpm lint
pnpm test
pnpm type-check
pnpm test:storybook
```

必要に応じて追加する確認:

- `pnpm build`: 本番ビルドへの影響を確認する
- `pnpm build-storybook`: Storybookのaddon、framework、builderを変更した場合に実行する
- `pnpm dev:msw`: mockやエラー系UIの確認が必要な場合に実行する

## 完了条件

タスク完了時には、少なくとも次を満たす。

- 依頼された変更が反映されている
- 変更内容に見合った検証が完了している
- 検証を省略した場合は理由が説明できる
- 必要なら整形が実施されている
- 自動生成ファイルに関わる変更がある場合、下記「自動生成されたファイルの扱い」に沿っている
- 関連ドキュメントの更新が必要なら反映されている

## 自動生成されたファイルの扱い

- 自動生成されたファイルは、手で保守する基準ファイルではなく、派生物として扱う
- 自動生成されたファイルだけを直接直すのは、その保守が目的のときに限る
- ソース変更に再生成が必要なら、生成差分も同じ変更に含める
- 作業開始前から自動生成されたファイルに差分や破損がある場合は、その状態を明示する

## 用途別の参照先

- ドキュメントの書き方を確認したいとき:
  - [docs/documentation-guide.md](./documentation-guide.md)
- コード規約を確認したいとき:
  - [docs/code-style.md](./code-style.md)
- テスト・lint方針を確認したいとき:
  - [docs/testing-policy.md](./testing-policy.md)
- 命名規約を確認したいとき:
  - [docs/naming-convention.md](./naming-convention.md)

## リポジトリ構成の目安

- `src/routes`: TanStack Routerのfile-based routes
- `src/views`: 画面単位のView、View専用component、横断UI
- `src/schema`: 検索条件やAPI contractなどの定義
- `src/lib`: fetcherや用途別の共有実装
- `src/consts`: 横断的に参照する定数
- `src/msw`: Mock Service Workerのhandlerとfixture
- `.storybook`: Storybook設定

## ビルドに関するメモ

- `pnpm build` は `tsc -b` のあとに `vite build` を実行する
- Viteのビルドでは、ルート直下の案内ページ `index.html` とSPA本体の `search/index.html` を出力する
- APIドキュメントは TanStack Router の `/search/api-doc/` ルートで表示する
- `vite-tsconfig-paths` は、現時点ではTanStack Routerのsplit routeと相性問題があるため維持している
- ルーティングまわりの注意点は [routing-guide.md](./routing-guide.md) を参照する
