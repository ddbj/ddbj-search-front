# 環境変数

## この文書の役割

この文書では、ローカル開発やビルド時に使う環境変数を整理する。

- `.env` はGit管理しない
- 共有が必要な環境変数は、この文書に記録する
- 新しい環境変数を追加したときは、この文書も更新する

## 基本方針

- Viteでクライアントコードから参照する環境変数は `VITE_` prefix を付ける
- ローカルで値を固定したい場合は、各自の `.env` に設定する
- `.env` は `.gitignore` 対象なので、必要な値はこの文書を基準に共有する
- secret や token のような公開できない値は、フロントエンドに渡さない

## 環境変数一覧

| 名前              | 用途                                                            | 既定値                          |
| ----------------- | --------------------------------------------------------------- | ------------------------------- |
| `VITE_API_PATH`   | API の読み込み先 (Vite build 時に bundle に静的置換)            | `https://nig.ac.jp/search/api/` |
| `VITE_MSW`        | `true` のときだけ Mock Service Worker を有効にする (dev のみ)   | `false`                         |
| `DDBJ_SEARCH_ENV` | Docker container / image / network 名の suffix (`compose.yml`) | なし (`env.{staging,production}` で指定) |

## 設定例

```dotenv
VITE_API_PATH=https://ddbj-staging.nig.ac.jp/search/api/
```

MSWを使う場合は、`pnpm dev:msw` を使う。

```bash
pnpm dev:msw
```

このコマンドは `VITE_MSW=true` を付けてViteを起動する。MSW は dev build (= `import.meta.env.DEV === true`) でのみ動作し、production build では dynamic import ごと tree-shake されて bundle に入らない。

## staging / production への配備 (build args 経由)

`env.staging` / `env.production` をリポジトリに置き、deploy 時にどちらかを `.env` に copy する。Vite は `import.meta.env.VITE_API_PATH` を **build 時に bundle へ静的置換** するため、staging / production の image は ESM bundle の中身が違う (= 環境ごとに別物の image)。

`compose.yml` の `build.args.VITE_API_PATH` が `.env` の `VITE_API_PATH` を読み、Dockerfile の `ARG VITE_API_PATH` → `ENV VITE_API_PATH=${VITE_API_PATH}` を経由して `pnpm build` に渡る。

```bash
cp env.staging .env
docker compose build   # bundle に staging の API URL が embed される
```

runtime に `/runtime-config.json` を吐いて読ませる方式は使わない。理由は (a) Vite の静的置換に乗ったほうがコード側がシンプル、(b) 環境ごとに image を別 build する負担は local build only の運用方針 (各ホストで `up -d --build`) と整合するため。

## 追加するときのルール

環境変数を追加したときは、次を確認する。

- 名前、用途、既定値、設定例をこの文書に追加する
- ローカルだけで必要な値は `.env` に置き、Git管理しない
- READMEや開発手順から案内が必要な場合は、関連文書にもリンクを追加する
