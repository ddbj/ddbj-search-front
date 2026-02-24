import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";
import { findBySlot } from "@/utils/storybook.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SortDropdown,
  args: {
    changeSortFunc: () => {},
    currentSort: null,
  },
  decorators: [],
} satisfies Meta<typeof SortDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const Click = {
  play: async ({ canvasElement, step, userEvent }) => {
    await step("click trigger", async () => {
      const trigger = await findBySlot("trigger");
      await userEvent.click(trigger);
    });
  },
} satisfies Story;
