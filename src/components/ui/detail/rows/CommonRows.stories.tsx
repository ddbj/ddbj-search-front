import { Meta, StoryObj } from "@storybook/react";
import { CommonRows } from "./CommonRows";

const meta: Meta<typeof CommonRows> = {
  component: CommonRows,
};
export default meta;

type Story = StoryObj<typeof CommonRows>;
export const Primary: Story = {
  args: {},
};
