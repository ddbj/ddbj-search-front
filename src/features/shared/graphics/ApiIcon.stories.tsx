import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApiIcon } from "@/features/shared/graphics/ApiIcon.tsx";

const meta = {
  component: ApiIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof ApiIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
