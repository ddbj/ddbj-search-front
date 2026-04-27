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

## `Modified` と `Updated` の使い分け

- API付近では、DB側の語彙に合わせて `dateModified` を使う
- UI表示では、人間に自然な `updated` に寄せる
- INSDC側の表現も `updated` に合わせる
