import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryBuilder } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect } from "storybook/test";
import type { BioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
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

const bioProjectFacetData: BioProjectFacetListResponse = {
  facets: {
    type: null,
    organism: null,
    accessibility: null,
    objectType: [{ value: "UmbrellaBioProject", count: 12 }],
  },
};

const makeBioProjectQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  queryClient.setQueryData(
    ["fetchFacets", ...Object.entries(bioProjectParams), dbTypes.bioproject],
    bioProjectFacetData,
  );
  return queryClient;
};

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
  render: (args) => (
    <QueryClientProvider client={makeBioProjectQueryClient()}>
      <QueryBuilder {...args} />
    </QueryClientProvider>
  ),
  play: async ({ canvas }) => {
    await expect(
      await canvas.findByRole("checkbox", { name: "Umbrella Project (12)" }),
    ).toBeInTheDocument();
    await expect(await canvas.findByRole("textbox", { name: "Organization" })).toHaveValue("NCBI");
    await expect(await canvas.findByRole("textbox", { name: "Publication" })).toHaveValue("Nature");
    await expect(await canvas.findByRole("textbox", { name: "Grant" })).toHaveValue("NSF");
  },
} satisfies Story;
