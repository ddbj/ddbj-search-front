import type { Meta, StoryObj } from "@storybook/react-vite";
import { DownloadIcon } from "@/features/shared/graphics/DownloadIcon.tsx";

const meta = {
  component: DownloadIcon,
  args: {},
  decorators: [],
} satisfies Meta<typeof DownloadIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const AcceptClass = {
  args: {
    className: "w-6 h-6 fill-blue-500 bg-yellow-200",
  },
} satisfies Story;
