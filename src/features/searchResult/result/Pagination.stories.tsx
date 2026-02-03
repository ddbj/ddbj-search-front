import { Pagination } from "./Pagination.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: Pagination,
  args: {
    current: 1,
    total: 10,
    params: {},
  },
  decorators: [],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
