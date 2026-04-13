# docs index

## この文書の役割

この文書は、`docs/` 配下の文書全体への入口です。

- どの情報をどの文書で扱うかを素早く把握する
- 詳細を確認したい文書へ迷わず辿れるようにする
- 個別文書の役割が重ならないように導線をまとめる

## 日常開発

- [`development-guide.md`](./development-guide.md): 日常開発で使う手順、検証方針、完了条件をまとめた正本
- [`documentation-guide.md`](./documentation-guide.md): ドキュメントの書き方、置き分け方、一時メモの扱いをまとめた正本
- [`external-tool-operation.md`](./external-tool-operation.md): AI が外部ツールを使うときの進め方、待ち方、進捗共有の標準運用
- [`agent-browser.md`](./agent-browser.md): `agent-browser` で Storybook / 実アプリを確認するときの入口、待機条件、成果物共有の運用メモ

## 実装規約

- [`code-style.md`](./code-style.md): 実装時のコードスタイルと例外ルールをまとめた正本
- [`testing-policy.md`](./testing-policy.md): テスト、lint、型チェックに関する実装ルールをまとめた正本
- [`naming-convention.md`](./naming-convention.md): 命名規約と型、スキーマの接尾辞ルールをまとめた正本

## 仕様・技術構成

- [`spec.md`](./spec.md): 採用している主要ライブラリと技術構成の入口
- [`domain-behavior.md`](./domain-behavior.md): 画面表示や download link など、ドメイン固有の挙動を整理した文書

## 設計判断

- [`decisions/README.md`](./decisions/README.md): 設計判断ログの役割、運用ルール、ひな形をまとめた入口
- [`decisions/2026-04-09-error-handling.md`](./decisions/2026-04-09-error-handling.md): problem response の保持、404 の扱い、共通エラーレイヤーの方針を記録した判断

## エージェント向け

- [`agents/skills/`](./agents/skills/): エージェント用のタスク別スキル定義（詳細は `AGENTS.md` を参照）
