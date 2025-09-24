import { InfoListItem } from "./InfoListItem.tsx"
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: InfoListItem,
  args: {},
  decorators: [],
} satisfies Meta<typeof InfoListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
