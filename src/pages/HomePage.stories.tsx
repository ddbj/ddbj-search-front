import { expect, userEvent } from "storybook/test";
import { HomePage } from "@/pages/HomePage.tsx";
import { findByListValue, findBySlot } from "@/utils/storybook.ts";
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
    expect(router.state.location.pathname).toBe("/entry");
    expect(router.state.location.search.keywords?.sort()).toEqual(["hoge", "foo"].sort());
  },
} satisfies Story;

export const NavigateToSingleType = {
  play: async ({ canvasElement, canvas, step }) => {
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");

    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });
    await step("click types", async () => {
      const bioSample = await findByListValue("biosample");
      await userEvent.click(bioSample);
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
