# AGENTS.md

## 開発環境
- 本プロジェクトはTypeScriptベースでReactのアプリを作っています
- パッケージ管理は pnpm です。
  - npm script を実行する時は pnpm から実行してください。

## コミニュケーション言語
- できるだけ英語を利用します
  - ユーザーは日本語話者のため、質問は日本語で行う可能性がありますが、英語で返すようにしてください。
  - コメントも英語で書きます
- 英語のトーンは簡潔・明瞭
    - コーディングの界隈で使われる明瞭なトーンが望ましいです
    - 簡単と平易は違います。 "general" より、"specific" な単語を用いてください

## コード規約
- JavaScriptではなくTypeScriptを優先的に使用します。
  - ユーザーがJavaScriptの概念を質問するときには「JavaScriptで質問です」と聞くかもしれませんが、回答内容のサンプルはTypeScriptのコードで型をつけた状態で回答してください。
- 関数の定義は function ではなく アロー関数を使ってください。
  ```typescript
  //NG
  function foo(){}
  //OK
  const bar = () => {};
  ```
  - 例外がいくつかあります
    - TanStackRouterのRouteファイルは、`function RouteComponent()` のように function 宣言を使ってください, 

## テスト・リンター
- Vitest でテストを書いています。
  - テストのファイル名は `fileName.spec.ts(x)` とします。
  - ユニットテストがしやすいように関数を書いてください
  - ReactComponentで使用するロジックはコンポーネントと同じファイル内にできるだけ pure function として作成しつつ `__TEST__ComponentName` というオブジェクトにまとめてエクスポートすることで内部関数の維持とユニットテストを同居させます 
- タスク完了時にはルートフォルダの `test`,`lint`,`type-check` を実行して全てのテストが通っているか確認してください
  - ignore系のコメントコードは後述する例外を除いて禁止します。
    - エラーを消すことが困難な場合はその旨を報告してください
### `eslint-disable-next-line` を許容するパターン
- react-refresh/only-export-components
  - export の対象がテスト用途に限定されている場合
    - 多くのケースで `__TEST__` の接頭辞をつけています

## その他
- 変更・作成したファイル全体の出力は不要です。
  - ファイルパスの一覧だけを出力してください。
