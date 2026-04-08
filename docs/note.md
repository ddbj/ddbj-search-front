# 仕様など

## Entry Title の扱いについて
- 各Entryには "タイトル" 的な扱いになるものが複数存在していたり、存在していなかったりする
- title, name が両方あるパターンもある
- カードタイトルやページタイトルはこの差異を吸収するために `getEntryTitle()` を利用して表示する 


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


## Error handling (2026-04)
- HTTP エラーの解釈は fetch ごとに分散させず、共通レイヤーで処理する
  - `response.ok` の判定、`application/problem+json` のパース、`status` / `detail` / `requestId` の保持をまとめて扱う
  - 各 fetcher では共通処理を呼ぶだけにして、エラー解釈のばらつきを防ぐ
- 404 は 1 種類ではない
  - 未定義の route は Router の notFound として扱う
  - detail route 上で identifier が存在しない場合は API の 404 を route loader で Router の notFound に変換する
  - 500 や予期しない例外は error boundary に流す
- backend の `application/problem+json` はフロントでもそのまま価値がある
  - `status`, `title`, `detail`, `requestId` はデバッグや問い合わせ導線に使えるので、可能な限り保持する
  - staging でもこの形式の 500 が返ってきたため、モックと UI もこの形に寄せる
- TanStack Router の file-based routing では、`src/routes` 配下の補助ファイルも route と解釈される
  - route ではない helper は `src/routes` の外に置くか、ignore 対象になる命名にする
  - route loader の共通処理は `src/utils` などに逃がす方が安全
- MSW は success path だけでなく failure path も持たせる
  - detail API では 404 / 500 の problem response を共通的に返せるようにしておくと、UI と fetcher の回帰テストが書きやすい
  - 「正常系のダミーデータ」だけでなく「どう壊れるか」を mock できる状態を維持する
- 現在の SPA 配信では 404 page は UI 上の状態であり、初回レスポンスの real HTTP 404 ではない
  - Netlify の rewrite 設定上、未知の path でも `index.html` が返る
  - SEO や監視の都合で real HTTP status が必要になった場合は、frontend 実装ではなく配信方式の課題として別途扱う
