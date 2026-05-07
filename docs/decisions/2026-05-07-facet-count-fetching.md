# Facet countはUI単位で取得する

## 決定

- 検索結果画面のfacet countは、facetを表示するUI単位で個別に取得する
- 各facet UIは、自身が操作する検索条件だけを除外してfacet APIを呼ぶ
- Entry listの検索結果取得では、選択中の検索条件をすべて適用する

## 背景

- Facet APIは、渡された検索条件で絞り込んだ後のfacet countを返す
- そのため、あるfacet自身の検索条件を含めたまま同じfacet countを取得すると、未選択候補が0件に見えることがある
- 例として、BioProject検索で `objectTypes=UmbrellaBioProject` を指定した状態で `objectType` facetを取得すると、`BioProject` 側のcountが返らない

## 採用した理由

- Facet UIごとに取得条件を作ると、「自分自身の条件だけ除外し、他の条件は維持する」という方針を素直に表現できる
- `TypeSelector` は `types` を除外して `facets=type` を取得する
- `ObjectTypeSelector` は `objectTypes` を除外して `facets=objectType` を取得する
- Query Builder全体で1回だけfacetを取得する方式では、複数facet UIを同時に扱うときにfacetごとの自己条件除外を表現しづらい

## 影響範囲

- 検索結果画面のQuery Builder
- facet countを表示するselector component
- `src/fetch/facets/` 配下のfacet API fetcher

## 補足

- この方針ではfacet UIの数だけAPI requestが増える
- API負荷は増えるが、facet UI上の候補件数を自然に表示することを優先する
- API requestでは必要なfacet fieldを `facets` parameterで明示する
- paginationはfacet count取得には不要なので除外する

## 見直し条件

- API側で複数facetのdisjunctive countを1 requestで返せるようになった場合
- facet UIの数が増え、request数やレスポンス時間がユーザー体験上の問題になった場合
- facet countの表示仕様を「現在の絞り込み後に残る候補だけを表示する」方針へ変更する場合
