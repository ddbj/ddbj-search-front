import type { Meta, StoryObj } from "@storybook/react-vite";
import { clsx } from "clsx";
import { CircleQuestionIcon } from "@/views/shared/icons/CircleQuestionIcon.tsx";

const meta = {
  component: CircleQuestionIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof CircleQuestionIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: clsx("h-6 w-6 bg-yellow-200 fill-blue-500"),
  },
};
