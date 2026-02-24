import { StarShineIcon } from "@/features/graphics/StarShineIcon.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: StarShineIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof StarShineIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
