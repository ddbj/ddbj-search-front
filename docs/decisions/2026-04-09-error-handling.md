# エラーハンドリング方針

## 決定

- HTTP エラーの解釈は fetch ごとに分散させず、共通レイヤーで扱う
- detail route 上の API 404 は、必要に応じて Router の notFound へ変換する
- `application/problem+json` の情報は可能な限り保持する
- MSW でも failure path を再現できる状態を維持する

## 背景

- fetcher ごとにエラー解釈がばらつくと、UI とデバッグ体験が不安定になる
- 404 には「未知の route」と「存在しない identifier」があり、同じ扱いにはできない
- backend では `application/problem+json` が返ってきており、frontend 側でもその情報を活かせる
- staging でもこの形式の 500 が確認されており、success path だけでなく failure path の整備が必要だった

## 採用した理由

- `response.ok` 判定、`application/problem+json` の parse、`status` / `detail` / `requestId` の保持を共通化すると、各 fetcher の解釈差を防げる
- route 単位で notFound と error boundary の役割を分けると、ユーザーに見せる状態を整理しやすい
- problem response の構造を保持すると、問い合わせ導線やデバッグに使いやすい
- MSW で失敗系も再現できると、UI と fetcher の回帰テストが書きやすい

## 影響範囲

- fetch 共通処理
- route loader の 404 変換
- error boundary と notFound の責務分離
- MSW の mock 設計

## 補足

- TanStack Router の file-based routing では、`src/routes` 配下の補助ファイルも route と解釈される
- route ではない helper は `src/routes` の外に置くか、ignore 対象の命名にする
- route loader の共通処理は `src/utils` などに逃がす方が安全
- 現在の SPA 配信では、未知の path でも `index.html` が返るため、UI 上の 404 は real HTTP 404 ではない

## 見直し条件

- 配信方式が変わり、real HTTP 404 を frontend 側でも扱う必要が出た場合
- backend の error response 形式が変わった場合
- route 構成や loader 設計の方針が大きく変わった場合
