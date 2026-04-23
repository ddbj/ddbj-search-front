# ドメイン挙動メモ

## この文書の役割

この文書では、検索結果や詳細画面の表示・導線に関わるドメイン固有の挙動を整理する。

- 画面表示で吸収しているデータ差異
- `download link` のようなドメイン依存の例外挙動
- 用語表示の使い分け

設計判断そのものは [docs/decisions/README.md](./decisions/README.md) に残し、ここでは現在の挙動と補足ルールを扱う。

## Entry Titleの扱い

- 各Entryには、「タイトル」に相当する値が複数存在する場合と、存在しない場合がある
- `title` と `name` の両方が存在するパターンもある
- カードタイトルやページタイトルでは、この差異を吸収するために `getEntryTitle()` を利用して表示する

## `download link`（`downloadUrl`）の扱い

- HTTPS / FTPで実データをダウンロードさせる機能として扱う
- API内にある `Distribution` は、現時点では実質使用していない

### JgaDacの場合

- `download link` のエリア自体を表示しない

### BioProject / BioSampleの場合

- `downloadUrl` 内のデータがDB全体になっており、サイズが大きすぎてダウンロードできないケースがある
- そのため、APIのJSONを直接使う
  - FTPは作らず、HTTPSのリンクのみを扱う
  - 新UI / APIでのURLの見せ方は、必要に応じて別途見直す

### それ以外の場合

- リンク切れの可能性があるため、フロントエンドで読み込んだあとにHTTPSリンクを `method: HEAD` で確認する
- HTTPSのリンクが切れていたら、FTPも切れているとみなす
- リンクが切れていたら、リンクを貼らずにグレーアウトした文字列のみを表示する
- CORS制約により、異なるドメインのリンクに対してはHEADリクエストが失敗するため、リンクチェックは同一ドメインに限定する

## `Modified` と `Updated` の使い分け

- `dateModified` はDB周りのボキャブラリとしてAPI付近で使う
- UI表示では、より人間に自然な `updated` に寄せる
- INSDC側の表現も `updated` に合わせる
