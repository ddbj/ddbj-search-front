import type { Meta, StoryObj } from "@storybook/react-vite";
import { MagnifierIcon } from "@/features/shared/graphics/MagnifierIcon.tsx";

const meta = {
  component: MagnifierIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof MagnifierIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
};
