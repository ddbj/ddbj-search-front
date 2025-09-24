import { DownloadPanel } from "./DownloadPanel.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: DownloadPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof DownloadPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
