---
name: SVG ICON
description: SVG のアイコンコンポーネントを作るための指示です
---

## 概要
* FontAwesome のSVGコードから 本プロジェクトで使用する Reactコンポーネント と Storybook のテストを作成するための指示です。

## 作業フォルダ
- 特別な指示がない場合は `/src/features/graphics/` 内にファイルを作ります。
    - この指示書で参考に示しているファイルもこのフォルダにあります。

## 指示
* 「SVG アイコンを作ってください」という指示があったら、以下の手順に従ってユーザーに内容を確認しながら、説明を参考に作成してください。
* 指示の中に説明が含まれている場合は、確認は省いて説明を参考に作成してください。

1. 必要事項を確認する
   - SVG コード
   - FontAwesomeのURL
   - アイコン名
2. コードを作成する
   - React コンポーネント
   - Storybook ファイルを作成する

* 「SVGアイコンを置き換えたいです」という指示があったら、以下の手順に従ってユーザーに内容を確認しながら、該当のコードを置き換えてください

1. 必要事項を確認する
   - 置き換え対象のアイコンコンポーネント
   - FontAwesomeのURL
   - アイコン名
2. コードの置き換えをする
   - React コンポーネントのSVGコード及び参照URLを置き換えてください

## コード詳細
- 以下のコードとURLを元に出力されるべきコードが `ApiIcon.tsx`, `ApiIcon.stories.tsx` になります。 
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.--><path d="M400 80l0 352-352 0 0-352 352 0zM48 32l-48 0 0 448 448 0 0-448-400 0zM86.1 176l80 80c-49.7 49.7-76.4 76.4-80 80l33.9 33.9 17-17 80-80 17-17c-.8-.8-33.1-33.1-97-97l-17-17-33.9 33.9zM216 336l-24 0 0 48 160 0 0-48-136 0z"/></svg>
```
https://fontawesome.com/icons/square-terminal?f=sharp&s=regular
