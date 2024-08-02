import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;
export const Primary: Story = {
  args: {
    total: 10,
    current: 1,
  },
};
