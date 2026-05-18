import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeIcon } from "@/features/shared/graphics/HomeIcon.tsx";

const meta = {
  component: HomeIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof HomeIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
};
