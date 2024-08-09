import { Meta, StoryObj } from "@storybook/react";
import { CopyIcon } from "@/components/icon/CopyIcon.tsx";

const meta: Meta<typeof CopyIcon> = {
  component: CopyIcon,
};
export default meta;

type Story = StoryObj<typeof CopyIcon>;
export const Primary: Story = {
  args: {
    className: "h-16 w-16",
  },
};
