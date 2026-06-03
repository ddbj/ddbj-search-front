# ドメイン挙動メモ

## この文書の役割

この文書では、検索結果画面や詳細画面で吸収しているドメイン固有の挙動を整理する。

- 画面表示で吸収しているデータ差異
- 用語表示の使い分け

設計判断そのものは [docs/decisions/README.md](./decisions/README.md) に残し、この文書では現在の挙動と補足ルールを扱う。

## Entry Titleの扱い

- 各Entryでは、「タイトル」に相当する値が複数候補ある場合と、存在しない場合がある
- `title` と `name` が両方入るパターンもある
- カードタイトルやページタイトルでは、この差異を吸収するために `getEntryTitle()` を使う

## 表示項目ラベルの管理

- APIの項目名とUIで表示する語彙は異なる場合がある。
- 表示ラベルは [`src/consts/entryDisplayLabels.ts`](../src/consts/entryDisplayLabels.ts) で管理する。
- API付近では、API定義上のfield名をそのまま使う。
