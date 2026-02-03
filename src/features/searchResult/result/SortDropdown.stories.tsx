import { SortDropdown } from "@/features/searchResult/result/SortDropdown.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SortDropdown,
  args: {},
  decorators: [],
} satisfies Meta<typeof SortDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
