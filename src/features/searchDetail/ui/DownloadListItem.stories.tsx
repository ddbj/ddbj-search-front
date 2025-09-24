import { DownloadListItem } from "./DownloadListItem.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DownloadListItem,
  args: {},
  decorators: [],
} satisfies Meta<typeof DownloadListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
