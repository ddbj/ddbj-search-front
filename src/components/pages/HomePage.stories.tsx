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
  play: async ({ canvasElement }) => {
    const router = window.__STORYBOOK_ROUTER__;
    if (!router) throw new Error("Router not found");

    const button = canvasElement.querySelector("button#searchButton")!;
    await userEvent.click(button);
    expect(router.state.location.pathname).toBe("/all");
  },
} satisfies Story;
