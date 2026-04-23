# `agent-browser` 運用メモ

## この文書の役割

この文書では、このリポジトリで `agent-browser` を使って画面確認するときの運用を扱う。

## 前提

- `agent-browser` はリポジトリ依存ではなく、各利用者の個人環境で使えるようにしておく

## Storybookでの見方

- `agent-browser` からStorybookを開くときは、manager UI経由より `iframe.html` を直接開くほうが安定しやすい

## スクリーンショット運用

- スクリーンショットなどの一時成果物は `.agent-browser/` に保存する
- `.agent-browser/` はGit管理に含めない
- 一時確認用の成果物として扱い、コミット対象にはしない

## 関連文書

- [docs/development-guide.md](./development-guide.md)
- [docs/external-tool-operation.md](./external-tool-operation.md)
