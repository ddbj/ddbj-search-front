import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyIcon } from "@/features/shared/graphics/CopyIcon.tsx";

const meta = {
  component: CopyIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof CopyIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
