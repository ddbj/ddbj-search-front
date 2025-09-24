import { XrefListItem } from "./XrefListItem.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: XrefListItem,
  args: {},
  decorators: [],
} satisfies Meta<typeof XrefListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
