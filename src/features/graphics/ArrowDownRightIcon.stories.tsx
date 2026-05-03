import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowDownRightIcon } from "@/features/graphics/ArrowDownRightIcon.tsx";

const meta = {
  component: ArrowDownRightIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof ArrowDownRightIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
