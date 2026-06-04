# コード規約

## この文書の役割

この文書では、実装時のコードスタイルと例外ルールを定める。

- 対象:
  - 使用言語
  - 関数定義の基本方針
  - 例外実装時のコメント方針
  - 実装スタイル上の補足ルール
- 対象外:
  - 命名規則
  - 日常開発の検証方針
  - 個別機能の設計判断

## 使用言語

- JavaScriptではなくTypeScriptを優先して使う
- ユーザーがJavaScriptの概念を質問していても、特に指定がなければ型付きのTypeScriptサンプルで答える

## Reactのimport

- React Hooksは `React.useState` のような名前空間経由ではなく、`useState` のようにnamed importして使う

```typescript
// NG
import React from "react";

const [open, setOpen] = React.useState(false);

// OK
import React, { useState } from "react";

const [open, setOpen] = useState(false);
```

## 関数定義

- 原則として、`function` 宣言ではなくアロー関数を使う

```typescript
// NG
function foo() {}

// OK
const bar = () => {};
```

### 例外

- TanStack RouterのRouteファイルでは、フレームワーク側の慣例に合わせて `function RouteComponent()` のような `function` 宣言を使ってよい

## `export` の最小化

- `export` は外部モジュールから実際に参照する値・型だけに限定する
- ファイル内でしか使わないヘルパー、スキーマ、中間型は `export` しない
- コードを修正した結果、以前必要だった `export` が不要になっていないか見直す
- 補完候補のノイズや似た名前のミスマッチを避けるため、公開面はできるだけ小さく保つ

## クラス文字列

- Tailwind CSS のクラス文字列は、`oxfmt` で並び替えられる形で書く
- JSXタグ内の `className` 属性は、そのまま書いてよい
- それ以外の場所に書くクラス文字列は、`clsx(...)` で包む

## 例外実装時のコメント

- 通常の規約から意図的に外れる実装では、短いコメントを近くに残す
- コメントには「何をしているか」ではなく、「なぜその例外が必要か」を書く
- 対象になりやすいもの:
  - 命名
  - ファイル配置
  - `export` 形式
  - フレームワーク都合の回避策

## 関連ドキュメント

- [docs/naming-convention.md](./naming-convention.md): 命名規約
- [docs/testing-policy.md](./testing-policy.md): テストとlintの方針
- [docs/decisions/README.md](./decisions/README.md): 規約ではなく判断記録として残す内容の置き場
