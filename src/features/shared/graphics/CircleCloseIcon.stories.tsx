import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleCloseIcon } from "@/features/shared/graphics/CircleCloseIcon.tsx";

const meta = {
  component: CircleCloseIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof CircleCloseIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
