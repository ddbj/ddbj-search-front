import { StatusPanel } from "./StatusPanel.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: StatusPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof StatusPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
