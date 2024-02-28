import { Meta, StoryObj } from "@storybook/react";
import { SearchResultSkeleton } from "./SearchResultSkeleton";

const meta: Meta<typeof SearchResultSkeleton> = {
  component: SearchResultSkeleton,
};
export default meta;

type Story = StoryObj<typeof SearchResultSkeleton>;
export const Primary: Story = {
  args: {},
};
