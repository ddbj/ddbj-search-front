import { expect, fn } from "storybook/test";
import { KeywordInput } from "./KeywordInput.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: KeywordInput,
  args: {},
  decorators: [],
} satisfies Meta<typeof KeywordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const hasSearch = {
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
    const input = canvasElement.querySelector("input")!;
    await userEvent.type(input, ", bar");

    const keywords = router.latestLocation.search.keywords?.map((v) => v.trim());
    expect(keywords).toEqual(["hoge", "foo", "bar"]);

    // console.log(keywords);
  },
} satisfies Story;
