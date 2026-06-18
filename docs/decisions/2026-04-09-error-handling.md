# エラーハンドリング方針

## 決定

- HTTPエラーの解釈はfetchごとに分散させず、共通レイヤーで扱う
- detail route上のAPI 404は、必要に応じてRouterの `notFound` へ変換する
- `application/problem+json` の情報は、可能な限り保持する
- MSWでも失敗系を再現できる状態を維持する

## 背景

- fetcherごとにエラー解釈がばらつくと、UIとデバッグ体験が不安定になる
- 404には「未知のroute」と「存在しないidentifier」があり、同じ扱いにはできない
- バックエンドでは `application/problem+json` が返ってきており、フロントエンド側でもその情報を活かせる
- stagingでもこの形式の500が確認されており、成功系だけでなく失敗系の整備が必要だった

## 採用した理由

- `response.ok` 判定、`application/problem+json` のパース、`status` / `detail` / `requestId` の保持を共通化すると、各fetcherの解釈差を防げる
- route単位で `notFound` と error boundary の役割を分けると、ユーザーに見せる状態を整理しやすい
- problem responseの構造を保持すると、問い合わせ導線やデバッグに使いやすい
- MSWで失敗系も再現できると、UIとfetcherの回帰テストが書きやすい

## 影響範囲

- fetch共通処理
- route loaderの404変換
- error boundary と notFound の責務分離
- MSWのmock設計

## 補足

- TanStack Routerのfile-based routingでは、`src/routes` 配下の補助ファイルもrouteと解釈される
- routeではないhelperは `src/routes` の外に置くか、ignore対象の命名にする
- route loaderの共通処理は `src/lib/router` などに逃がすほうが安全
- 現在のSPA配信では、未知のpathでも `index.html` が返るため、UI上の404は実際のHTTP 404ではない

## 見直し条件

- 配信方式が変わり、実際のHTTP 404をフロントエンド側でも扱う必要が出た場合
- バックエンドのerror response形式が変わった場合
- route構成やloader設計の方針が大きく変わった場合
