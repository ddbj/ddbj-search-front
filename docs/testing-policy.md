# テスト・lint方針

## この文書の役割

この文書では、テスト・lint・型チェックに関する実装ルールを定める。

- 実装時にどう書くか、どこまでを例外とするかを扱う
- 日常的な実行タイミングや完了条件は [docs/development-guide.md](./development-guide.md) を参照する

## 基本方針

- テストはVitestで書く
- テストファイル名は `*.spec.ts(x)` とする
- テストしやすさを優先して、ロジックはユニットテスト可能な形で分離する
- lintや型チェックのエラーを、ignore系コメントで覆い隠す前提では書かない

## `__TEST__` exportの扱い

- Reactコンポーネントで使うロジックをコンポーネントと同じファイルに置く場合は、`pure function` として置く
- ユニットテストから参照する必要がある場合は、`__TEST__` で始まるオブジェクトにまとめて `export` する
- 通常利用向けの `export` とテスト補助用の `export` を分け、内部実装を必要以上に公開しない

## ignore系コメントの扱い

- 手で書くコードでは、ここで定める例外を除いてignore系コメントを使わない
- まずは実装、型、テスト配置を見直し、コメントでの回避を最後の手段にする
- やむをえず例外を使う場合は、理由を短いコメントで残す
- エラーを消すことが困難な場合は、その旨を報告する

### `eslint-disable-next-line` を許容するパターン

- `react-refresh/only-export-components`
  - `export` の対象が `__TEST__` で始まるテスト補助に限られている場合
  - 多くのケースでは、`__TEST__` で始まるオブジェクトにまとめる
  - なぜ例外が必要かを、行コメントで短く添える

## 関連ドキュメント

- [docs/development-guide.md](./development-guide.md): いつどの検証を実行するか
- [docs/code-style.md](./code-style.md): 実装時のコード規約
- [docs/naming-convention.md](./naming-convention.md): 命名規約
- [docs/documentation-guide.md](./documentation-guide.md): この文書自体を更新するときの方針
