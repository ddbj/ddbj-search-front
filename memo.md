# ddbj-search-front: ES 直接アクセス廃止方針

## 背景

- 現状、フロントエンドは ES (Elasticsearch) と API の両方を叩いている
- ES の露出をやめたい
- 新 API (`ddbj-search-api`) を開発中で、`/search/api` にデプロイ予定
- フロント側の差分は最小限にしたい（ReactiveSearch の大改修は避ける）

## 現状の構成

```text
nginx
├── /search/           → Front (Vite)
├── /search/resources  → ES (nginx reverse proxy)
├── /search/entry      → 旧 API
└── /search/api        → 新 API (これから)
```

### フロントからの ES 直接アクセス箇所 (2 箇所)

1. **検索ページ (ReactiveSearch)**
   - `SearchResource.tsx`: `ReactiveBase` が `ELASTICSEARCH_URL` (`/search/resources`) を叩く
   - `Conditions.tsx`: 検索フィルター (keyword, database, type, organism, date)
   - `Result.tsx`: 検索結果表示 (ページネーション付き)
   - ライブラリ: `@appbaseio/reactivesearch` v3.40.1

2. **詳細ページ (fetchDetail)**
   - `fetchDetail.ts`: `GET /search/resources/{type}/_doc/{id}` で ES の `_doc` API を直接叩く

### フロントからの API アクセス箇所

- `DownloadLinks.tsx`: `ENTRY_URL` (`/search/entry/{type}/{id}.json`) を使用

## 方針

### ReactiveSearch はそのまま残す

- ReactiveSearch の除去は大改修になり、テストコストが高い
- `/search/resources` は既に nginx が ES を proxy しているため、ES は直接露出していない
- nginx 設定で読み取り専用に制限すれば十分

### nginx 側の対応 (ddbj-search インフラ repo)

- `/search/resources` の nginx proxy を読み取り専用に制限
  - 許可: `_search`, `_msearch`, `_doc` (GET/POST)
  - 拒否: それ以外 (`_bulk`, `_delete`, インデックス操作等)

### フロント側の対応 (このリポジトリ)

変更ファイル: 2-3 個、変更行数: 10 行程度

| ファイル | 変更内容 |
|---------|---------|
| `src/constants.ts` | `ENTRY_URL` を新 API パス (`/search/api/entries`) に変更 |
| `src/utils/fetchDetail.ts` | ES `_doc` → 新 API `GET /entries/{type}/{id}` に差し替え。`_source` ラッパー除去 |
| `src/types/api.ts` | `SingleSearchElasticsearchResponse` の `_source` ラッパーが不要になる等の型調整 |

### 変更しないもの

- `SearchResource.tsx`, `Conditions.tsx`, `Result.tsx` (ReactiveSearch 関連一式)
- `ELASTICSEARCH_URL` (検索ページで引き続き使用)

## 新 API 仕様

`ddbj-search-api/docs/api-spec.md` を参照。

### フロントが使う新 API エンドポイント

| 用途 | エンドポイント | 備考 |
|------|-------------|------|
| 詳細取得 | `GET /entries/{type}/{id}` | `fetchDetail.ts` から使用。dbXrefs 切り詰め + dbXrefsCount 付き |
| JSON ダウンロード | `GET /entries/{type}/{id}.json` | `DownloadLinks.tsx` から使用。ES ドキュメントそのまま |

## 確認事項

- [ ] 新 API `GET /entries/{type}/{id}` のレスポンスフィールド名が現状のコード (`dbXref`, `sameAs` 等) と一致するか
- [ ] `dbXref` → `dbXrefs` のようなフィールド名変更があるか (converter 由来)
- [ ] nginx の読み取り制限ルールの具体的な設定内容 (ddbj-search repo 側)
