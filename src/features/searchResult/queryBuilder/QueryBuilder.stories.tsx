import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryBuilder } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: QueryBuilder,
  args: {
    update: __SB_updateFunctions,
    currentType: null,
    params: {},
  },
  decorators: [],
} satisfies Meta<typeof QueryBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const BioProject = {
  args: {
    currentType: dbTypes.bioproject,
    params: {},
  },
} satisfies Story;
