import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SearchDetailLayout,
  args: {},
  decorators: [],
} satisfies Meta<typeof SearchDetailLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
