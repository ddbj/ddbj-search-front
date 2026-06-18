import type { Meta, StoryObj } from "@storybook/react-vite";
import { clsx } from "clsx";
import { ExternalLinkIcon } from "@/views/shared/icons/ExternalLinkIcon.tsx";

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
    className: clsx("h-6 w-6 bg-yellow-200 fill-blue-500"),
  },
} satisfies Story;
