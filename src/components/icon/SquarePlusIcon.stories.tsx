import { Meta, StoryObj } from "@storybook/react";
import { SquarePlusIcon } from "@/components/icon/SquarePlusIcon.tsx";

const meta: Meta<typeof SquarePlusIcon> = {
  component: SquarePlusIcon,
};
export default meta;

type Story = StoryObj<typeof SquarePlusIcon>;
export const Primary: Story = {
  args: {
    className: "h-16 w-16",
  },
};
