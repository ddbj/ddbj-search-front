import type { Meta, StoryObj } from "@storybook/react-vite";
import { XrefListItem } from "./XrefListItem.tsx";

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
      {
        label: "DDBJ 123",
        link: { kind: "external", href: "https://www.ddbj.nig.ac.jp/index-e.html" },
      },
      {
        label: "DDBJ 456",
        link: { kind: "external", href: "https://www.ddbj.nig.ac.jp/dra/index-e.html" },
      },
      {
        label: "DDBJ 789",
        link: { kind: "external", href: "https://www.ddbj.nig.ac.jp/biosample/index-e.html" },
      },
    ],
    isTruncated: false,
  },
} satisfies Story;
