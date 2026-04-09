# テスト・lint 方針

## この文書の役割

この文書は、テスト・lint・型チェックに関する実装ルールの正本です。

日常的な実行タイミングや完了条件は `docs/development-guide.md` を参照してください。

## 基本方針

- Vitest でテストを書く
- テストファイル名は `fileName.spec.ts(x)` とする
- ユニットテストしやすいように、ロジックを分離して書く

## `__TEST__` export

- ReactComponent で使うロジックは、コンポーネントと同じファイル内に pure function として置いてよい
- その場合は `__TEST__ComponentName` というオブジェクトにまとめて export し、内部関数の維持とユニットテストを両立させる

## ignore 系コメントの扱い

- ignore 系コメントは、ここで定める例外を除いて使わない
- エラーを消すことが困難な場合は、その旨を報告する

### `eslint-disable-next-line` を許容するパターン

- `react-refresh/only-export-components`
  - export の対象がテスト用途に限定されている場合
  - 多くのケースで `__TEST__` の接頭辞をつける

## 関連ドキュメント

- `docs/development-guide.md`: いつどの検証を実行するか
- `docs/code-style.md`: 実装時のコード規約
- `docs/naming-convention.md`: 命名規約
- `docs/documentation-guide.md`: この文書自体を更新するときの方針
