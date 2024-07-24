import { Meta, StoryObj } from "@storybook/react";
import { CommonTitle } from "@/components/ui/detail/rows/CommonRows.tsx";

const meta: Meta<typeof CommonTitle> = {
  component: CommonTitle,
};
export default meta;

type Story = StoryObj<typeof CommonTitle>;
export const Primary: Story = {
  args: {},
};
