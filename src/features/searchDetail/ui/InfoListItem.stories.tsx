import { InfoListItem } from "./InfoListItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: InfoListItem,
  args: {
    term: "Example Term",
    toolTipContent: "This is an example tooltip content.",
    children: "This is the description or content for the info list item.",
  },
  decorators: [],
} satisfies Meta<typeof InfoListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
