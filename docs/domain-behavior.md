# ドメイン挙動メモ

## この文書の役割

この文書では、検索結果画面や詳細画面で吸収しているドメイン固有の挙動を整理する。

- 画面表示で吸収しているデータ差異
- `download link` のようなドメイン依存の例外挙動
- 用語表示の使い分け

設計判断そのものは [docs/decisions/README.md](./decisions/README.md) に残し、この文書では現在の挙動と補足ルールを扱う。

## Entry Titleの扱い

- 各Entryでは、「タイトル」に相当する値が複数候補ある場合と、存在しない場合がある
- `title` と `name` が両方入るパターンもある
- カードタイトルやページタイトルでは、この差異を吸収するために `getEntryTitle()` を使う

## `download link`（`downloadUrl`）の扱い

- `HTTPS` と `FTP` で実データをダウンロードさせる導線として扱う
- API内の `Distribution` は、現時点では実質使っていない

### JgaDacの場合

- `download link` のエリア自体を表示しない

### BioProject / BioSampleの場合

- `downloadUrl` に含まれるデータがDB全体になっており、大きすぎてダウンロードできないケースがある
- そのため、APIのJSONを直接使う
  - `FTP` は作らず、`HTTPS` のリンクだけを扱う
  - 新UI / APIでのURLの見せ方は、必要に応じて別途見直す

### それ以外の場合

- リンク切れの可能性があるため、フロントエンドで読み込んだあとに `HTTPS` リンクを `method: HEAD` で確認する
- `HTTPS` のリンクが切れていたら、`FTP` も切れているとみなす
- リンクが切れていたら、リンクを貼らずにグレーアウトした文字列のみを表示する
- CORS制約により、異なるドメインのリンクに対しては `HEAD` リクエストが失敗するため、リンクチェックは同一ドメインに限定する

## `Modified` と `Updated` の使い分け

- API付近では、DB側の語彙に合わせて `dateModified` を使う
- UI表示では、人間に自然な `updated` に寄せる
- INSDC側の表現も `updated` に合わせる
