# コード規約

## この文書の役割

この文書では、実装時のコードスタイルと例外ルールを定める。

- 対象:
  - 使用言語
  - 関数定義の基本方針
  - 例外実装時のコメント方針
  - 実装スタイル上の補足
- 対象外:
  - 命名規則
  - 日常開発の検証方針
  - 個別機能の設計判断

## 使用言語

- JavaScriptではなくTypeScriptを優先して使う
- ユーザーがJavaScriptの概念を質問していても、特に指定がなければ型付きのTypeScriptサンプルで答える

## 関数定義

- 原則として、`function` 宣言ではなくアロー関数を使う

```typescript
// NG
function foo() {}

// OK
const bar = () => {};
```

### 例外

- TanStack RouterのRouteファイルでは、`function RouteComponent()` のような `function` 宣言を使ってよい

## 例外実装時のコメント

- 通常の規約から意図的に外れる実装をする場合は、短いコメントを近くに残す
- コメントには「何をしているか」ではなく、「なぜこの例外が必要か」を書く
- 対象になりやすいもの:
  - 命名
  - ファイル配置
  - `export` 形式
  - フレームワーク都合の回避策

## 関連ドキュメント

- [docs/naming-convention.md](./naming-convention.md): 命名規約
- [docs/testing-policy.md](./testing-policy.md): テストとlintの方針
- [docs/decisions/README.md](./decisions/README.md): 規約ではなく判断記録として残す内容の置き場
