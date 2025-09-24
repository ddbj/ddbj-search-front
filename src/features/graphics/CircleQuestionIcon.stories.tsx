import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

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
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
};
