import { Meta, StoryObj } from "@storybook/react";
import { SquareMinusIcon } from "@/components/icon/SquareMinusIcon.tsx";

const meta: Meta<typeof SquareMinusIcon> = {
  component: SquareMinusIcon,
};
export default meta;

type Story = StoryObj<typeof SquareMinusIcon>;
export const Primary: Story = {
  args: {
    className: "h-16 w-16",
  },
};
