import type { Meta, StoryObj } from "@storybook/react-vite";
import { clsx } from "clsx";
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
    className: clsx("h-6 w-6 bg-yellow-200 fill-blue-500"),
  },
};
