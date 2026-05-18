import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleQuestionIcon } from "@/features/shared/graphics/CircleQuestionIcon.tsx";

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
