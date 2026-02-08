# ddbj-search-front

[DDBJ Search](https://ddbj.nig.ac.jp/search) のフロントエンド。

## 関連プロジェクト

- [ddbj-search](https://github.com/ddbj/ddbj-search) - nginx reverse proxy
- [ddbj-search-api](https://github.com/ddbj/ddbj-search-api) - RESTful API サーバー
- [ddbj-search-converter](https://github.com/ddbj/ddbj-search-converter) - データ投入用パイプラインツール (Elasticsearch 管理)

## 概要

DDBJ Search Frontend は、BioProject / BioSample / SRA / JGA データを横断的に検索・閲覧するための React SPA。

### システム構成

```plain
Internal nginx (ddbj-search-network)
  -> /search/api/* -> ddbj-search-api (API server)
  -> /search/*     -> ddbj-search-front (this project)
```

フロントエンドは nginx を経由してユーザーに配信される。
同一の Docker network (`ddbj-search-network-{env}`) を通じてアクセスする。
詳細は [ddbj-search/docs/network-architecture.md](https://github.com/ddbj/ddbj-search/blob/main/docs/network-architecture.md) を参照。

## クイックスタート

### 前提条件

- Podman (本番/ステージング) または Docker (開発)
- Node.js v18.x / pnpm v8.x (ローカル開発時)

### 環境起動 (Dev)

```bash
# 1. 環境変数を設定
cp env.dev .env

# 2. Docker network 作成（初回のみ、既に存在していてもエラーにならない）
docker network create ddbj-search-network-dev || true

# 3. 起動
docker compose up -d --build

# 4. コンテナに入る
docker compose exec app bash

# 5. 開発サーバーを起動 (コンテナ内で実行)
pnpm dev
```

### 環境起動 (Staging / Production)

```bash
# 1. 環境変数と override を設定
cp env.staging .env  # または env.production
cp compose.override.podman.yml compose.override.yml

# 2. Podman network 作成（初回のみ、既に存在していてもエラーにならない）
podman network create ddbj-search-network-staging || true
# production の場合: podman network create ddbj-search-network-production || true

# 3. 起動 (ビルド + preview が自動起動する)
podman-compose up -d --build
```

### 動作確認

```bash
# nginx 経由でアクセス (ddbj-search が起動済みの場合)
curl http://localhost:8000/search
```

## 環境構築

### 環境ファイル

| ファイル | 説明 |
|---------|------|
| `compose.yml` | 統合版 Docker Compose |
| `compose.override.podman.yml` | Podman 用の差分設定 |
| `env.dev` | 開発環境 (`sleep infinity`、手動で `pnpm dev`) |
| `env.staging` | ステージング環境 (`pnpm run start` = build + preview) |
| `env.production` | 本番環境 (`pnpm run start` = build + preview) |

### .env の主要設定

`env.*` ファイルをコピーして使用する。

```bash
# === Environment ===
DDBJ_SEARCH_ENV=production   # dev, staging, production

# === Application Settings ===
DDBJ_SEARCH_BASE_URL=https://ddbj.nig.ac.jp   # ブラウザから ES/API を叩くベース URL

# === Command ===
DDBJ_SEARCH_FRONT_COMMAND=pnpm run start   # sleep infinity (dev)
```

`DDBJ_SEARCH_ENV` により、コンテナ名 (`ddbj-search-front-{env}`) と Docker network 名 (`ddbj-search-network-{env}`) が自動決定される。

`DDBJ_SEARCH_BASE_URL` は `vite.config.ts` の `define` で Vite ビルド時定数として埋め込まれる。
staging/production ではコンテナ起動時に `pnpm run start` (= `pnpm run build && pnpm run preview`) が実行されるため、環境変数の値がビルドに反映される。

## 開発

### セットアップ

```bash
# pnpm がインストールされていない場合
corepack enable

# 依存パッケージのインストール
pnpm install
```

### テスト・リント

```bash
pnpm test
pnpm lint
```

### Storybook

```bash
pnpm storybook
```

## License

This project is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) license. See the [LICENSE](./LICENSE) file for details.
