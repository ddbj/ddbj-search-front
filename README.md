# DDBJ Search front
[DDBJ Search](https://ddbj.nig.ac.jp/search) のフロントエンドコード。以前はバックエンドと同一リポジトリ内にあったが開発が煩雑化したためフロントエンドだけを独立させた。

## requirements
- Node.js v18.x
- pnpm v8.x (recommended)

## deployment
以下のコマンドでビルドを行い、dist 内に生成されたファイル群をサーバーにアップロードする。
```bash
pnpm install
pnpm run build
```
**SPAとして作らているため、サーバー側の設定で `/search/entries/` 以下のURLをすべて `/search/*` にルーティングする必要がある**

## technologies
以前はNext.jsで作られていたが、SPA構成にするためにシンプルなReact(TypeScript)で構成している。

### frontend
- react 
- @tanstak/react-router
- tailwindcss
- @appbaseio/reactivesearch (廃止予定)

### build
- vite

### testing
- jest
- storybook

### lint/formatter
- eslint
- prettier
