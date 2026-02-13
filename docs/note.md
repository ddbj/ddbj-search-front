# 仕様など

## 日付変更ライブラリ
- dayjs を使用


## download link (downloadUrl) の仕様 (2024版)
- HTTPS / FTP で実データをダウンロードさせる機能
- API内にある Distribution は実質使用していない
### JgaDacの場合
- エリアそのものを表示させない
### BioProject / BioSample の場合
- downloadUrl 内のデータがDBまるごとになっている(？)ためサイズが巨大でダウンロードできない
- そのため、api のjson を直接叩く
  - FTPはつくらない HTTPS のリンクのみ
  - 新UI / API の場合のURLの見せ方は要議論
### それ以外の場合
- リンクが切れている可能性があるので、フロント読み込み後に https のリンクを `method:HEAD` で確認する
  - https のリンクが切れていたらFTPも切れているとみなす
  - リンクが切れていたらリンクを貼らずにグレーアウトしたリンクの文字列だけを表示する
  - fetch には CORSが必要なことが多いので同一ドメインでなければこのリンクチェックは行わなくてよい


## Modified or Updated
- dateModified は DB周りのボキャブラリ
  - API周辺ではこれを使う
- 人間的に直感的なのはどちらかというと updated で INSDCはこちら合わせ
  - UIの表示はこちらに寄せる
