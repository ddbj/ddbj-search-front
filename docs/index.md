# docs一覧

## この文書の役割

この文書では、`docs/` 配下の文書への入口を示す。

- どの情報をどの文書で扱うかを素早く把握できるようにする
- 詳細を確認したい文書へ迷わず辿れるようにする
- 個別文書の役割が重ならないように導線を整理する

## 日常開発

- [`development-guide.md`](./development-guide.md): 日常開発で使う手順、検証方針、完了条件
- [`documentation-guide.md`](./documentation-guide.md): ドキュメントの書き方、置き分け方、一時メモの扱い
- [`external-tool-operation.md`](./external-tool-operation.md): AIが外部ツールを使うときの進め方、待ち方、進捗共有の標準運用
- [`agent-browser.md`](./agent-browser.md): `agent-browser` でStorybookや実アプリを確認するときの前提と成果物運用

## 実装規約

- [`code-style.md`](./code-style.md): 実装時のコードスタイルと例外ルール
- [`testing-policy.md`](./testing-policy.md): テスト、lint、型チェックに関する実装ルール
- [`naming-convention.md`](./naming-convention.md): 命名規約と型、スキーマの接尾辞ルール

## 仕様・技術構成

- [`spec.md`](./spec.md): 採用している主要ライブラリと技術構成の入口
- [`domain-behavior.md`](./domain-behavior.md): 画面表示や `download link` など、ドメイン固有の挙動を整理した文書
- [`routing-guide.md`](./routing-guide.md): `/search/` 配下でSPAを配信するためのルーティング注意点

## 設計判断

- [`decisions/README.md`](./decisions/README.md): 設計判断ログの役割、運用ルール、ひな形を示す入口
- [`decisions/2026-04-09-error-handling.md`](./decisions/2026-04-09-error-handling.md): problem responseの保持、404の扱い、共通エラーレイヤーの方針を記録した判断
- [`decisions/2026-04-23-mise-source-of-truth.md`](./decisions/2026-04-23-mise-source-of-truth.md): Node.js / pnpm の基準を `mise.toml` に寄せ、`package.json` のバージョン定義を削る判断を記録した文書
- [`decisions/2026-04-27-date-range-picker-locale.md`](./decisions/2026-04-27-date-range-picker-locale.md): `DateRangePicker` の英語表示と年月日順のために `en-CA` を使う判断を記録した文書

## エージェント向け

- [`agents/skills/`](./agents/skills/): エージェント用のタスク別スキル定義（詳細は `AGENTS.md` を参照）
