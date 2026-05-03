# ルーティングガイド

## この文書の役割

この文書では、DDBJ Search Frontendのルーティング設定と、`/search/` 配下でSPAを配信するときの注意点を扱う。

- TanStack Routerのアプリ内ルーティング
- Viteのビルド・previewでのルーティング
- Netlifyやサーバー側のSPA fallback
- 内部リンクを作るときの注意点

通常の開発手順や検証方針は [development-guide.md](./development-guide.md) を参照する。

## 基本方針

- このアプリのSPA本体は `/search/` 配下で動作する
- ルート直下の `index.html` は案内ページであり、SPA本体ではない
- SPAのHTMLエントリポイントは `/search/index.html`
- TanStack Routerの `basepath` は `/search` に合わせる

## サーバー側のfallback

- サーバー側のSPA fallbackは `/search/*` を `/search/index.html` へ向ける
- ルート直下の `/*` を `/index.html` へ広くfallbackさせない
- `/search/assets/*` はそのまま静的アセットとして配信する

ルート直下の `index.html` は仮の案内ページなので、`/*` を `/index.html` に向けるとSPAの深いURLが案内ページへ倒れる。

## Vite preview / dev

Vite標準のSPA fallbackは `/index.html` に向きやすい。

このリポジトリでは、`vite.config.ts` で `/search/*` だけを `/search/index.html` へ向けるpreview/dev用middlewareを維持する。

- `appType` は、ルート案内ページと `/search/` SPAを分けるために `mpa` として扱う
- preview/devで `/search/entry/` などを直接開いたときも `/search/index.html` が返るようにする

## 内部リンク

- ルート生成や内部遷移を変更するときは、`trailingSlash: "always"` に合わせる
- `Link` の `to` や `navigate` の `to` は、末尾 `/` ありのURLにする
- 末尾 `/` なしのURLを作ると、正規化されるまで一瞬404が表示されることがある

例:

```tsx
<Link to="/entry/bioproject/" />
```

```ts
navigate({ to: "/entry/" });
```

## 通常のアンカー

TanStack Routerの `Link` ではなく通常の `<a href>` で内部リンクを作る場合は、`basepath` が補正されない。

そのため、必要に応じて `/search/` を含める。

例:

```tsx
<a href="/search/entry/bioproject/PRJDB1/">PRJDB1</a>
```

外部リンクはこの限りではない。
