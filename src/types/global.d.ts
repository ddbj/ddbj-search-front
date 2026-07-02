// `window.__STORYBOOK_ROUTER__` は `.storybook/preview.tsx` の `RouterDecorator`
// が Storybook 起動時にセットし、`src/lib/storybook/storybook.ts` および各
// `*.stories.tsx` の `play` 関数が読み出す。preview.tsx 側で declare global を
// 書いても `tsc -b` 実行時に stories 側の compile context に伝播しないため、
// ambient な `.d.ts` として独立に持つ。
import type { AnyRouter } from "@tanstack/react-router";

declare global {
  interface Window {
    __STORYBOOK_ROUTER__?: AnyRouter;
  }
}

export {};
