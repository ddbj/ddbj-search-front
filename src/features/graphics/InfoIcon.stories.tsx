import { InfoIcon } from "@/features/graphics/InfoIcon.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: InfoIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof InfoIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
