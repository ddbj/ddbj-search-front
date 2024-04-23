# DDBJ Search front

[DDBJ Search](https://ddbj.nig.ac.jp/search) のフロントエンド。

## Software Requirements

- Node.js v18.x
- pnpm v8.x (recommended)

## Development

開発環境:

```bash
docker compose -f compose.dev.yml up -d --build
docker compose -f compose.dev.yml exec app pnpm run dev
# Open your browser and navigate to `localhost:3000`.
```

### Build SPA files

以下のコマンドでビルドを行い、dist 内に生成されたファイル群をサーバーにアップロードする。

```bash
docker compose -f compose.dev.yml up -d --build
docker compose -f compose.dev.yml exec app pnpm run build
```

### Release

- バージョン管理の format として、`yyyymmdd` を用いる。
  - 一日に複数回 tag を打つことは、想定しない (release process を見直したほうが良い)
- この version を Docker image と GitHub Release 用の tag として用いる

Release script として、[./release.sh](./release.sh) を用いる

```bash
bash release.sh <version>
# 1. 設定ファイルの version を更新
# 2. git commit & tag & push
# (3. GitHub Actions で自動的に docker image/release/pages が生成・公開される)
```

なので、[https://ddbj.github.io/ddbj-search-front/](https://ddbj.github.io/ddbj-search-front/) にも page が公開される。(preview として用いる)

## License

This project is licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).
See the [LICENSE](./LICENSE) file for details.
