// `window.__STORYBOOK_ROUTER__` は `.storybook/preview.tsx` の `RouterDecorator`
// が Storybook 起動時にセットし、`src/lib/storybook/storybook.ts` および各
// `*.stories.tsx` の `play` 関数が読み出す。preview.tsx 内でも同じ augmentation
// を declare global で行っているが、`tsc -b` 単体実行時に preview.tsx の augmentation
// が stories の compile context に伝播せず TS2551 になるため、ambient な `.d.ts`
// として独立に持っておく。
import type { AnyRouter } from "@tanstack/react-router";

declare global {
  interface Window {
    __STORYBOOK_ROUTER__?: AnyRouter;
  }
}

export {};
