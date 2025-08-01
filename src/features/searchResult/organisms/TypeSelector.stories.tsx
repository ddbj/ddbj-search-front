import { TypeSelector } from "@/features/searchResult/organisms/TypeSelector.tsx";
import type { DBType } from "@/consts/db.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: TypeSelector,
  args: {
    value: [],
    update: (v: DBType[]) => {},
    linkSearchParams: {},
  },
  decorators: [],
} satisfies Meta<typeof TypeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
