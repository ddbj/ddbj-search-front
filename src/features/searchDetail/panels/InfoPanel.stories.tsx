import type { Meta, StoryObj } from "@storybook/react-vite";
import { bioproject1 } from "@/msw/data/bioproject1.ts";
import { InfoPanel } from "./InfoPanel.tsx";

const meta = {
  component: InfoPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof InfoPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    data: bioproject1,
  },
} satisfies Story;
