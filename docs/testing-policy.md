# テスト・lint方針

## この文書の役割

この文書では、テスト・lint・型チェックに関する実装ルールを定める。

日常的な実行タイミングや完了条件は [docs/development-guide.md](./development-guide.md) を参照する。

## 基本方針

- テストはVitestで書く
- テストファイル名は `*.spec.ts(x)` とする
- ユニットテストしやすい形でロジックを分離する

## `__TEST__` exportの扱い

- Reactコンポーネントで使うロジックは、コンポーネントと同じファイルに `pure function` として置いてよい
- その場合は、`__TEST__` で始まるオブジェクトにまとめて `export` し、内部実装を必要以上に公開せずにユニットテストを書きやすくする

## ignore系コメントの扱い

- ignore系コメントは、ここで定める例外を除いて使わない
- エラーを消すことが困難な場合は、その旨を報告する

### `eslint-disable-next-line` を許容するパターン

- `react-refresh/only-export-components`
  - `export` の対象がテスト用途に限られている場合
  - 多くのケースでは、`__TEST__` で始まるオブジェクトにまとめる

## 関連ドキュメント

- [docs/development-guide.md](./development-guide.md): いつどの検証を実行するか
- [docs/code-style.md](./code-style.md): 実装時のコード規約
- [docs/naming-convention.md](./naming-convention.md): 命名規約
- [docs/documentation-guide.md](./documentation-guide.md): この文書自体を更新するときの方針
