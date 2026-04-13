import { dummyResponse } from "@/consts/api.ts";
import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "./SearchResultLayout.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const bioProjectParams: AnySearchParams = {
  keywords: ["metagenome"],
  organization: "NCBI",
  publication: "Nature",
  grant: "NSF",
  umbrella: true,
  datePublishedFrom: "2024-01-01",
  datePublishedTo: "2024-01-31",
  dateModifiedFrom: "2024-02-01",
  dateModifiedTo: "2024-02-15",
} as const;

const meta = {
  component: SearchResultLayout,
  args: {
    updateFunctions: __SB_updateFunctions,
    entryType: null,
    params: {},
    data: dummyResponse,
  },
  decorators: [],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchResultLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All = {} satisfies Story;
export const BioProject = {
  args: {
    entryType: dbTypes.bioproject,
    params: bioProjectParams,
  },
} satisfies Story;
