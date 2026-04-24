# 命名規約

## この文書の役割

この文書では、名前の付け方と型・スキーマの接尾辞ルールを定める。

- 対象:
  - 変数名、関数名、型名、ファイル名
  - APIリクエスト / レスポンスの型名
  - Zod schemaや検索パラメータの命名
- 対象外:
  - コードスタイルや関数定義の方針（→ [docs/code-style.md](./code-style.md)）
  - 個別機能の設計判断
  - 一時的な実装メモ
  - 日常運用や検証方針

## 基本ルール

- **型名 / クラス名 / コンポーネント名**: `PascalCase`（パスカルケース）
- **変数名 / 関数名**: `camelCase`（キャメルケース）
- **定数**: `UPPER_SNAKE_CASE`（アッパースネークケース）
- **ファイル名 / ディレクトリ名**:
  - **コンポーネント / レイアウト**: `PascalCase`
    - 例: `SearchResultLayout.tsx`, `TypeSelector.tsx`
  - **ユーティリティ / API定義 / ロジック / スキーマ**: `camelCase`
    - 例: `parseBaseEntryParams.ts`, `all.ts`, `searchSchema.ts`
  - **テストファイル**: 元のファイル名に `.spec` を付与する。
    - 例: `parseBaseEntryParams.spec.ts`
  - **Storybook**: 元のファイル名に `.stories` を付与する。
    - 例: `TypeSelector.stories.tsx`
  - **ルート定義 (TanStack Router)**: file-based routeの規則に合わせた名前を使う。
    - 例: `status.tsx`, `index.tsx`, `$identifier.tsx`, `sra-study/index.tsx`

## API関連

### リクエストパラメータ

- **型名**: 複数のパラメータを保持するオブジェクトを定義する場合は、末尾を `RequestParams` とする。
  - 例: `BaseDetailRequestParams`, `AllFacetListRequestParams`
- **変数名**: `params` または `...Params` を使う。

### Zodスキーマ

- **スキーマ定義**: `z.object` などで定義されるスキーマ変数は、末尾を `Schema` とする。
  - 例: `allFacetListRequestParamsSchema`
- **形状（Shape）**: スキーマ定義を拡張（`.extend()`）する際などに利用するオブジェクト形状の定義は、末尾を `Shape` とする。
  - 例: `allEntryListRequestParamsShape`

### レスポンス

- **型名**: APIからのレスポンスを定義する型は、末尾を `Response` とする。
  - 例: `AllFacetListResponse`

## 検索・URLパラメータ関連

### 検索パラメータ（フロントエンド側）

- **型名**: ブラウザのURL（クエリパラメータ）と同期し、UIや内部処理で使う検索条件の型は、末尾を `SearchParams` とする。
  - 例: `AnySearchParams`, `BaseSearchParams`
  - **用途**: TanStack Routerの `validateSearch`、UIコンポーネントの `props`、APIを呼び出す `fetch` 関数の引数など。
- **スキーマ名**: 検索パラメータをバリデーションするためのZodスキーマは、末尾を `SearchSchema` とする。
  - 例: `allSearchSchema`

### 型の使い分けと変換

1. **`SearchParams`**: フロントエンドのURLが保持する型。配列（`keywords` など）や特定のリテラルを含む。
2. **変換**: `src/fetch/utils/` 配下などの関数で `SearchParams` を `RequestParams` に変換する。
3. **`RequestParams`**: APIリクエスト時に実際に送信される型。クエリ文字列として送りやすいように、配列をカンマ区切りの文字列へ変換する。

## 運用メモ

- 命名ルールの例外が必要な場合は、コードの近くに「なぜその例外が必要か」を短く残す
- 命名規約に収まらない設計判断は、この文書に追記せず判断記録や関連ドキュメントへ分離する
