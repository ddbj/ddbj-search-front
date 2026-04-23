# miseをNode.js / pnpmのSource of Truthにする方針

## 決定

- Node.js / pnpmの実行バージョンは、`mise.toml` を唯一の参照元とする
- `package.json` の `engines` と `packageManager` は削除する
- ドキュメントやエージェント運用では `mise exec -- ...` を優先する

## 背景

- ローカルでは `mise activate` の有無によって、同じ `pnpm` コマンドでも参照するNode.jsがずれることがあった
- `package.json` と `mise.toml` の両方にバージョン情報を持つと、どちらを更新すべきかが曖昧になる
- AIエージェントやクラウド環境では、シェル初期化に依存しない実行方法を前提にしたい

## 採用した理由

- `mise.toml` を唯一の参照元にすると、ローカルとエージェントの実行条件を合わせやすい
- `package.json` の `engines` と `packageManager` は補助的なメタデータだが、今回の運用では重複した定義になっていた
- 将来的に GitHub Actions でも `mise` の導入を検討しやすくするには、先にリポジトリ内のバージョン定義を `mise.toml` に集約しておくほうが扱いやすい

## 影響範囲

- ローカル開発時のNode.js / pnpmの扱い
- AIエージェントやクラウド実行時のコマンド運用
- 開発ドキュメント上のセットアップ手順とコマンド例

## 補足

- GitHub Actions の運用は現時点では変更しない
- ただし、将来 Actions 側でも `mise` を採用するかどうかを検討する余地は残す

## 見直し条件

- `mise` 以外のバージョン管理手段を標準に戻す判断が行われた場合
- GitHub Actionsや他の実行環境で `package.json` の `engines` / `packageManager` を再び参照元として使う必要が出た場合
- `mise.toml` だけでは運用上の不都合が継続的に発生した場合
