import { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "@/components/icon/HomeIcon.tsx";

const meta: Meta<typeof HomeIcon> = {
  component: HomeIcon,
};
export default meta;

type Story = StoryObj<typeof HomeIcon>;
export const Primary: Story = {
  args: {
    className: "h-16 w-16",
  },
};
