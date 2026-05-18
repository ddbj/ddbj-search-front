import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExternalLinkIcon } from "@/features/shared/graphics/ExternalLinkIcon.tsx";

const meta = {
  component: ExternalLinkIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof ExternalLinkIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
