import { XrefListItem } from "./XrefListItem.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: XrefListItem,
  args: {},
  decorators: [],
} satisfies Meta<typeof XrefListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    term: "ddbj",
    values: [
      ["DDBJ 123", "https://www.ddbj.nig.ac.jp/index-e.html"],
      ["DDBJ 456", "https://www.ddbj.nig.ac.jp/dra/index-e.html"],
      ["DDBJ 789", "https://www.ddbj.nig.ac.jp/biosample/index-e.html"],
    ],
  },
} satisfies Story;
