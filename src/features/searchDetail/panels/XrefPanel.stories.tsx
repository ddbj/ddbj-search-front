import { XrefPanel } from "./XrefPanel.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: XrefPanel,
  args: {},
  decorators: [],
} satisfies Meta<typeof XrefPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
