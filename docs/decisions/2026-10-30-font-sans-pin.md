# Tailwind CSSの `--font-sans` を固定する方針

## 決定

- `src/index.css` の `@theme` で、`--font-sans` を `ui-sans-serif, system-ui, sans-serif` から始まる値に固定する
- Tailwind CSSを更新しても、Tailwind CSSが既定にしている `--font-sans` の値は取り込まない

## 背景

- 画面の文字は、`--font-sans` に並べたフォントのうち、ブラウザが最初に使えるもので表示する
- Tailwind CSS 4.3では、既定の `--font-sans` が `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...` から始まる値に変わった
- `system-ui` は、OSと言語の設定に応じたUIフォントを選ぶ
- macOSでは、どちらの値でもSan Franciscoで表示する
- WindowsとLinuxでは、Tailwind CSS 4.3の既定値に従うと、表示に使うフォントが変わることがある

## 採用した理由

- 依存パッケージを更新しても、画面のフォントが変わらない
- Tailwind CSSの既定値に従う案では、依存パッケージを更新するたびに、フォントの見た目も確認する必要がある

## 影響範囲

- `src/index.css`
- 既定のフォントで文字を表示するすべての画面とStorybook

## 見直し条件

- 画面で使うフォントを変えると決めた場合
- Tailwind CSSで、`@theme` から `--font-sans` を上書きする方法が変わった場合
