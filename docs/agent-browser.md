# `agent-browser` 運用メモ

## この文書の役割

この文書では、このリポジトリで `agent-browser` を使って画面確認するときの前提と補足ルールを扱う。

- 一般的な外部ツールの進め方は [docs/external-tool-operation.md](./external-tool-operation.md) を参照する

## 前提

- `agent-browser` はリポジトリ依存のセットアップ対象ではなく、各利用者の個人環境で使える状態にしておく

## Storybookでの見方

- `agent-browser` からStorybookを開くときは、manager UI経由より `iframe.html` を直接開くほうが安定しやすい

## スクリーンショット運用

- スクリーンショットなどの一時成果物は `.agent-browser/` に保存する
- `.agent-browser/` はGit管理に含めない
- 一時確認用の成果物として扱い、コミット対象にはしない

## 関連文書

- [docs/development-guide.md](./development-guide.md): 日常開発の手順と検証方針
- [docs/external-tool-operation.md](./external-tool-operation.md): 外部ツール全般の進め方
