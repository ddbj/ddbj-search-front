# 仕様など

## download link (downloadUrl) の仕様 (2024版)
* HTTPS / FTP で実データをダウンロードさせる機能
* API内にある Distribution は実質使用していない
* jga-dac では表示させない
### BioProject / BioSample の場合
* distribution 内のデータがDBまるごとになっている(？)ためサイズが巨大でダウンロードできない
* そのため、api のjson を直接叩く
  * FTPはつくらない HTTPS のリンクのみ
### それ以外の場合
* 



