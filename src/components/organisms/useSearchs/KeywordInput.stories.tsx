import { expect, fn } from "storybook/test";
import { KeywordInput } from "./KeywordInput.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { sleep } from "@/utils/sleep.ts";

const meta = {
  component: KeywordInput,
  args: {},
  decorators: [],
} satisfies Meta<typeof KeywordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const update = {
  decorators: [
    (Story) => {
      const router = window.__STORYBOOK_ROUTER__;
      if (!router) throw new Error("Router not found");
      router.navigate({ to: "/all" });
      return <Story />;
    },
  ],

  play: async ({ canvas, canvasElement, userEvent, step }) => {
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");
    //
    step("immediate update", async () => {
      const input = canvasElement.querySelector("input")!;
      await userEvent.type(input, "foo");
      expect(router.latestLocation.search.keywords).toEqual(undefined);
    });
    step("after sleep", async () => {
      await sleep(300);
      const keywords = router.latestLocation.search.keywords?.map((v) => v.trim());
      expect(keywords).toEqual(["foo"]);
    });
  },
} satisfies Story;

export const hasInitialValue = {
  decorators: [
    (Story) => {
      const router = window.__STORYBOOK_ROUTER__;
      if (!router) throw new Error("Router not found");
      router.navigate({ to: "/all", search: { keywords: ["hoge", "foo"] } });
      return <Story />;
    },
  ],
  play: async ({ canvas, canvasElement, userEvent }) => {
    //
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");
    expect(router.latestLocation.search.keywords).toEqual(["hoge", "foo"]);
    const input = canvasElement.querySelector("input")!;
    // await userEvent.type(input, ", bar");
    //
    // const keywords = router.latestLocation.search.keywords?.map((v) => v.trim());
    // await sleep(300);
    // expect(keywords).toEqual(["hoge", "foo", "bar"]);

    // console.log(keywords);
  },
} satisfies Story;
