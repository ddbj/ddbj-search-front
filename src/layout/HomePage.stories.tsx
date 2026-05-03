import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { HomePage } from "@/layout/HomePage.tsx";

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
  play: async ({ canvasElement, canvas, userEvent }) => {
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");

    const input = await canvas.findByTestId("queryInput");
    await userEvent.type(input, "foo, hoge");

    const button = canvasElement.querySelector("button#searchButton")!;
    await userEvent.click(button);
    expect(router.state.location.pathname).toBe("/entry");
    expect(router.state.location.search.keywords?.sort()).toEqual(["hoge", "foo"].sort());
  },
} satisfies Story;

export const NavigateToSingleType = {
  play: async ({ canvasElement, canvas, step, userEvent }) => {
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");

    await step("click types", async () => {
      const select = canvasElement.querySelector("select[multiple]")!;
      await userEvent.selectOptions(select, ["biosample"]);
    });
    await step("input query", async () => {
      const input = await canvas.findByTestId("queryInput");
      await userEvent.type(input, "foo, hoge");
    });
    await step("click button", async () => {
      const button = canvasElement.querySelector("button#searchButton")!;
      await userEvent.click(button);
    });
    await step("expect results", async () => {
      expect(router.state.location.pathname).toBe("/entry/biosample");
      expect(router.state.location.search.keywords?.sort()).toEqual(["hoge", "foo"].sort());
      expect(router.state.location.search.types).toBe(undefined);
    });
  },
} satisfies Story;
