import { Meta, StoryObj } from "@storybook/react";
import { LockIcon } from "@/components/icon/lockIcon.tsx";

const meta: Meta<typeof LockIcon> = {
  component: LockIcon,
};
export default meta;

type Story = StoryObj<typeof LockIcon>;
export const Primary: Story = {
  args: {
    className: "h-16 w-16",
  },
};
