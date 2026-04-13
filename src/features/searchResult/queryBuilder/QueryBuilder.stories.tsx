import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryBuilder } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { Meta, StoryObj } from "@storybook/react-vite";

const primaryParams: AnySearchParams = {
  keywords: ["human microbiome"],
  types: ["biosample", "sra-analysis"],
  datePublishedFrom: "2021-01-01",
  datePublishedTo: "2024-12-31",
  dateModifiedFrom: "2024-01-01",
  dateModifiedTo: "2025-03-31",
} as const;

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
  component: QueryBuilder,
  args: {
    update: __SB_updateFunctions,
    currentType: null,
    params: primaryParams,
  },
  decorators: [
    (Story) => (
      <div className="bg-bg-canvas p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof QueryBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
export const BioProject = {
  args: {
    currentType: dbTypes.bioproject,
    params: bioProjectParams,
  },
} satisfies Story;
