import { expect, userEvent } from "storybook/test";
import { HomePage } from "@/components/pages/HomePage.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: HomePage,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary = {} satisfies Story;

export const Navigate = {
  play: async ({ canvasElement, canvas }) => {
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");

    const input = await canvas.findByTestId("queryInput");
    await userEvent.type(input, "foo, hoge");

    const button = canvasElement.querySelector("button#searchButton")!;
    await userEvent.click(button);
    expect(router.state.location.pathname).toBe("/all");
    expect(router.state.location.search.keywords.sort()).toEqual(["hoge", "foo"].sort());
  },
} satisfies Story;
