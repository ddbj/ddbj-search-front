import type { Meta, StoryObj } from "@storybook/react-vite";
import { clsx } from "clsx";
import { SquarePlusIcon } from "@/features/shared/graphics/SquarePlusIcon.tsx";

const meta = {
  component: SquarePlusIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof SquarePlusIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: clsx("h-6 w-6 bg-yellow-200 fill-blue-500"),
  },
} satisfies Story;
