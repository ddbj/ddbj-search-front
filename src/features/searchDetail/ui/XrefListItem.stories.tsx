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
    dbName: "ddbj",
    actualCount: 3,
    items: [
      { label: "DDBJ 123", url: "https://www.ddbj.nig.ac.jp/index-e.html", isExternal: false },
      { label: "DDBJ 456", url: "https://www.ddbj.nig.ac.jp/dra/index-e.html", isExternal: false },
      {
        label: "DDBJ 789",
        url: "https://www.ddbj.nig.ac.jp/biosample/index-e.html",
        isExternal: false,
      },
    ],
    isTruncated: false,
  },
} satisfies Story;
