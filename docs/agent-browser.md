# Agent Browser 運用メモ

## この文書の役割

この文書は、このリポジトリで `agent-browser` を使って画面確認するときの運用メモです。

## 前提

- `agent-browser` はリポジトリ依存ではなく、各利用者の個人環境で利用可能にしておく

## Storybook での見方

- `agent-browser` から Storybook を開くときは、manager UI 経由より `iframe.html` を直接開く経路のほうが安定しやすい

## スクリーンショット運用

- スクリーンショットなどの一時成果物は `.agent-browser/` に保存する
- `.agent-browser/` は Git 管理に含めない
- 一時確認用の成果物として扱い、コミット対象にはしない

## 関連文書

- `docs/development-guide.md`
- `docs/external-tool-operation.md`
