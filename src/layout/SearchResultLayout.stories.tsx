import { dummyResponse } from "@/consts/api.ts";
import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "./SearchResultLayout.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: SearchResultLayout,
  args: {
    updateFunctions: __SB_updateFunctions,
    entryType: null,
    params: {},
    data: dummyResponse,
  },
  decorators: [],
} satisfies Meta<typeof SearchResultLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All = {} satisfies Story;
export const BioProject = {
  args: {
    entryType: dbTypes.bioproject,
  },
} satisfies Story;
