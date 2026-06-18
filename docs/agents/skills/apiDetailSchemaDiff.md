---
name: API Detail Schema Diff
description: staging API の detail 応答と frontend の detail schema の差分を調べるための指示
---

## この指示の役割

- DBTypeごとの detail API 応答に、frontend の detail schemaへ未反映のトップレベルプロパティがないか調べる。
- schemaを修正する前の探索フェーズで使う。
- staging API は正本ではなく、実APIサンプルとして扱う。

## 対象

- `src/schema/api/detail/<dbType>.ts`
- `src/schema/api/detail/base.ts`
- staging の list API と detail API

DBTypeの例:

- `jga-dataset`
- `jga-study`
- `jga-policy`
- `jga-dac`
- `bioproject`
- `biosample`
- `sra-run`
- `sra-experiment`
- `sra-sample`
- `sra-analysis`
- `sra-submission`
- `sra-study`

## 手順

1. 比較基準を確認する
   - 対象DBTypeに対応する `src/schema/api/detail/<dbType>.ts` を読む。
   - `baseDetailResponseSchema` を継承している場合は `src/schema/api/detail/base.ts` も読む。
   - 現行 schema のトップレベル key を比較基準にする。

2. list API から候補 identifier を集める
   - list API は次の形式を使う。
     - `https://ddbj-staging.nig.ac.jp/search/api/entries/<dbType>/?includeFacets=false&includeProperties=false&dbXrefsLimit=0&page=<page>`
   - `pagination.total` と `pagination.perPage` から最大ページ数を計算する。
   - `page` は1000を上限にする。
     - 1001ページ以降は取得できない仕様として扱う。
     - サンプリング対象ページ数は `min(calculatedMaxPage, 1000)` とする。
   - 近い identifier に偏らないよう、異なるランダムページを複数選ぶ。
   - 1ページからまとめて取らず、原則として1ページにつき1 identifierだけランダムに選ぶ。
   - 重複を除いた20 identifierを集める。

3. detail API を取得する
   - detail API は次の形式を使う。
     - `https://ddbj-staging.nig.ac.jp/search/api/entries/<dbType>/<identifier>?dbXrefsLimit=0`
   - detail API でも、特別な理由がなければ `dbXrefsLimit=0` を付ける。
     - xrefsが多い entry で応答が重くなることを避けるため。
     - この調査の主目的はトップレベル key の差分確認であり、`dbXrefs` の中身確認ではない。
   - 取得した detail 応答のトップレベル key を集計する。
   - `properties.*` は raw metadata として観察してよいが、主比較には含めない。

4. 差分を出す
   - 現行 schema にないトップレベル key を抽出する。
   - keyごとに次を集計する。
     - 出現件数
     - 非空件数
     - 値の型
     - 代表 identifier
     - 代表値
     - 実値が観測できる identifier
   - 現行 schema にあるが実APIに出なかった key もあれば別枠で記録する。

5. 結果をまとめる
   - 結果は表で出す。
   - identifier は、detail API へ直接飛べる Markdown リンクにする。
   - 非空値がある field は、実値が観測できる identifier を優先して載せる。
   - schema修正方針は、この探索結果とは分けて次フェーズで判断する。

## 出力形式

```markdown
## 検証条件

- DBType: `<dbType>`
- total: `<pagination.total>`
- perPage: `<pagination.perPage>`
- maxPage: `<ceil(total / perPage)>`
- samplingMaxPage: `<min(maxPage, 1000)>`
- 抽出方法: `1..samplingMaxPage` の異なるランダムページから1件ずつ、重複除外後20 identifier
- detail取得: `dbXrefsLimit=0`
- 対象 identifier:
  - [`ID000001`](https://ddbj-staging.nig.ac.jp/search/api/entries/<dbType>/ID000001?dbXrefsLimit=0)

## 追加候補

| field          |    observedType | present | nonEmpty | sampleValue   | 実値が観測できる identifier                                                                      | notes    |
| -------------- | --------------: | ------: | -------: | ------------- | ------------------------------------------------------------------------------------------------ | -------- |
| `exampleField` | `array<string>` |   20/20 |    12/20 | `["example"]` | [`ID000001`](https://ddbj-staging.nig.ac.jp/search/api/entries/<dbType>/ID000001?dbXrefsLimit=0) | 実値あり |

## 補足

- raw `properties` 側で目立つ keyがあれば、必要な範囲で記録する。
- 既存 schema と値の互換性に別論点があれば、追加プロパティとは分けて記録する。
- 非空値が確認できた field は、代表値だけでなく確認用リンクも残す。
```

## 注意点

- この手順ではコードやAPI定義を変更しない。
- staging APIの応答は変わる可能性があるため、結果には取得日時と抽出した identifier を残す。
- ランダム抽出は再現性より探索性を優先する。
- ただし、報告には実際に使ったページ番号と identifier を残す。
- 同じ identifier が list API に複数回出る場合があるため、必ず重複を除く。
- Linearやissueに転記する場合も、実値が観測できる identifier は Markdown リンクで残す。
- APIリンクには原則として `?dbXrefsLimit=0` を付ける。
