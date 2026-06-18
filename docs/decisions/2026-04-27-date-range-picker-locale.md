# DateRangePickerの日付表示でen-CAを使う方針

## 決定

- `DateRangePicker` の日付入力表示では、React Ariaのロケール駆動のsegment順序を利用するため、`en-CA` を指定する
- カレンダーの月名と曜日名は英語で表示する
- 入力欄の区切り文字はロケール任せにせず、コンポーネント側で `/` として表示する

## 背景

- 検索条件の日付範囲入力では、カレンダーを英語表記にし、入力欄を年・月・日の順序で表示したい
  - 表示例は `2024 / 01 / 31` とする
- HeroUIの `DateRangePicker` は、React Ariaのdate fieldを基盤にしている
- React Ariaのdate fieldには、任意のフォーマット文字列を直接指定するAPIがない
- date fieldのsegment順序はロケールから決まるため、表示言語と日付順序を完全に別々のpropsで指定することはできない

## 採用した理由

- `en-CA` は英語表示を保ちながら、date fieldのsegment順序を年・月・日にできる
- React Ariaのsegment入力を維持できるため、キーボード編集やアクセシビリティ上の振る舞いを自前実装せずに済む
- 入力欄の `/` 区切りはコンポーネント側で描画し、区切り文字だけは実装意図を明示する
- 入力欄を完全に自前実装する案は、入力中状態、フォーカス移動、範囲選択、バリデーション、ARIA属性の維持まで必要になり、この変更の目的に対して実装量が大きい

## 影響範囲

- `src/views/searchResult/components/queryBuilder/primitives/DateRangePicker.tsx`
- 検索結果画面のQuery Builderにある日付範囲入力
- Storybook上の `DateRangePicker` 表示

## 補足

- `en-CA` は「英語表示」と「年・月・日のsegment順序」を両立するための実装上の選択であり、カナダ向けの地域仕様をドメイン仕様として採用する意図はない
- 保存値と `onChange` の文字列表現は、従来通り `yyyy-mm-dd,yyyy-mm-dd` のISO風表現を維持する

## 見直し条件

- HeroUIまたはReact Ariaが、日付入力の表示順序やフォーマットをロケールとは独立して指定できるAPIを提供した場合
- 手入力UIを自前実装する必要がある要件が追加された場合
- 日付表示仕様として、地域ロケールに依存しない独自コンポーネントを共通化する判断が行われた場合
