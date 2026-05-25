# Detail InfoPanelの行は表示項目単位で組み立てる

## 決定

- Detail画面の `InfoPanel` では、表示する行を表示項目単位のRowとして並べる。
- `InfoPanel` 直下では、各Rowに `SearchDetailResponse` 全体を `data` として渡す。
- 各Row wrapperは、必要なfieldが `data` に存在し、表示可能な値がある場合だけ描画する。
- DBTypeごとの `metadata` 設定テーブルや、`switch` による行生成は作らない。
- 値表示専用のRowは、原則として表示可能な値だけを受け取る。`null` や空値による表示可否の判断は、`InfoPanel` 側のwrapperに寄せる。

## 背景

- Detail画面では、DBTypeごとに追加表示したいfieldが異なる。
- 以前は、DBTypeごとのfield設定を別途持ち、そこから `DetailMetadataRow` のような中間レコードを作って描画していた。
- しかし、表示対象のfieldは、API定義上の `SearchDetailResponse` に含まれている。
- 表示側でfield名や値種別を改めて設定として持つと、API定義と表示設定の二重管理になりやすい。
- DBTypeごとの `switch` で行を組み立てる方式では、既存fieldが別のDBTypeにも追加されたときに、表示側の分岐も更新する必要がある。

## 採用した理由

- API型を基準にし、Row wrapperは `"field" in data` で対象fieldの有無を判定する。
- これにより、たとえばSRA Sampleに `strain` が追加された場合、既存の `StrainRow` でそのまま表示対象にできる。
- `InfoPanel` 直下にRowの表示順が並ぶため、画面上の順序を読み取りやすい。
- 値表示専用Rowは小さいpropsを維持できるため、Storybookを `SearchDetailResponse` 全体に引きずられにくい形で保てる。
- `null` や空値の判定を `InfoPanel` 側に寄せることで、値表示専用Rowは表示そのものに集中できる。

## 影響範囲

- Detail画面の `InfoPanel`
- `src/features/searchDetail/panels/rows/` 配下のRow component
- Detail画面のInfoPanel Storybook
- 今後追加するDetail API fieldの表示実装

## 補足

- 文字列1値の表示には `SanitizedRow` を使う。
- 文字列配列の表示には `StringArrayInfoRow` を使う。
- xref配列の表示には `XrefLinksRow` を使い、`DerivedFromRow` や `SameAsRow` のようなwrapperで表示可否とtermを決める。
- `PublicationsRow` や `ExternalLinksRow` のような値表示専用Rowは残す。ただし、`null` や空値を受ける前提にはしない。
- `properties` のように通常のAPI fieldではない値を例外的に表示する場合は、別の設計判断ログの方針に従う。

## 見直し条件

- Detail画面のfield数が増え、`InfoPanel` 内のRow一覧だけでは表示順やグルーピングを保ちにくくなった場合
- API側が表示行の順序やグループを返す設計に変わった場合
- DBTypeごとに同名fieldでも表示名や意味が大きく異なる例が増えた場合
