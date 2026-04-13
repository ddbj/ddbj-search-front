import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryBuilder } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
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
  component: QueryBuilder,
  args: {
    update: __SB_updateFunctions,
    currentType: null,
    params: {},
  },
  decorators: [
    (Story) => (
      <div className="p-4">
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
