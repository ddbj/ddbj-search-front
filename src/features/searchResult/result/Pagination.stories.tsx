import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination.tsx";

const meta = {
  component: Pagination,
  args: {
    current: 2,
    itemCount: 100,
    perPage: 10,
    searchParams: {},
  },
  decorators: [],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
