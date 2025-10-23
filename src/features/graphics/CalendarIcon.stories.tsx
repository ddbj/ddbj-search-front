import { CalendarIcon } from "@/features/graphics/CalendarIcon.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: CalendarIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof CalendarIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
};
