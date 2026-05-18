import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusIcon } from "@/features/shared/graphics/StatusIcon.tsx";

const meta = {
  component: StatusIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof StatusIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
