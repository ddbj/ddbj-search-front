import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon } from "@/features/shared/graphics/InfoIcon.tsx";

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
