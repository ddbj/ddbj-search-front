# Node.js / pnpmの基準をmise.tomlに集約する方針

## 決定

- Node.js / pnpmの実行バージョンは、`mise.toml` を唯一の参照元とする
- `package.json` の `engines` と `packageManager` は削除する
- ドキュメントやエージェント運用では、`mise exec -- ...` の実行形式を優先する

## 背景

- ローカルでは `mise activate` の有無によって、同じ `pnpm` コマンドでも参照するNode.jsがずれることがあった
- `package.json` と `mise.toml` の両方にバージョン情報を持つと、どちらを更新すべきかが曖昧になる
- AIエージェントやクラウド環境では、シェル初期化に依存しない実行方法を前提にする必要がある

## 採用した理由

- `mise.toml` を唯一の参照元にすると、ローカルとエージェントの実行条件を合わせやすい
- `package.json` の `engines` と `packageManager` は補助的なメタデータだが、今回の運用では `mise.toml` と重複していた
- リポジトリ内のバージョン定義を先に `mise.toml` へ集約しておくと、将来GitHub Actionsへ `mise` を導入する場合も扱いやすい

## 影響範囲

- ローカル開発時のNode.js / pnpmの扱い
- AIエージェントやクラウド実行時のコマンド運用
- 開発ドキュメントに記載するセットアップ手順とコマンド例

## 補足

- GitHub Actionsの運用は現時点では変更しない
- 将来GitHub Actions側でも `mise` を採用するかどうかは、別途検討する

## 見直し条件

- `mise` 以外のバージョン管理手段を標準に戻す判断が行われた場合
- GitHub Actionsや他の実行環境で `package.json` の `engines` / `packageManager` を再び参照元として使う必要が出た場合
- `mise.toml` だけを参照元にする運用で、継続的な不都合が発生した場合
