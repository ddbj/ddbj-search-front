import { TypeSelector } from "@/features/searchResult/organisms/TypeSelector.tsx";
import { sbGetRouter } from "@/utils/storybook.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DBType } from "@/consts/db.ts";

const meta = {
  component: TypeSelector,
  args: {
    types: [],
    linkSearchParams: {},
    mergeDBTypes: (type: DBType, value: boolean) => {},
  },
  decorators: [],
} satisfies Meta<typeof TypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
