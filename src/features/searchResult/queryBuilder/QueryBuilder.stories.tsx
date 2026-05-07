import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect } from "storybook/test";
import type { AllFacetListResponse } from "@/api/facets/all.ts";
import type { BioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { QueryBuilder } from "@/features/searchResult/queryBuilder/QueryBuilder.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";

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
  datePublishedFrom: "2024-01-01",
  datePublishedTo: "2024-01-31",
  dateModifiedFrom: "2024-02-01",
  dateModifiedTo: "2024-02-15",
} as const;

const primaryFacetParams: AnySearchParams = {
  keywords: primaryParams.keywords,
  datePublishedFrom: primaryParams.datePublishedFrom,
  datePublishedTo: primaryParams.datePublishedTo,
  dateModifiedFrom: primaryParams.dateModifiedFrom,
  dateModifiedTo: primaryParams.dateModifiedTo,
} as const;

const typeFacetData: AllFacetListResponse = {
  facets: {
    type: [
      { value: "biosample", count: 1200 },
      { value: "sra-analysis", count: 300 },
      { value: "bioproject", count: 900 },
    ],
    organism: null,
    accessibility: null,
  },
};

const bioProjectFacetData: BioProjectFacetListResponse = {
  facets: {
    type: null,
    organism: null,
    accessibility: null,
    objectType: [
      { value: "BioProject", count: 900 },
      { value: "UmbrellaBioProject", count: 100 },
    ],
  },
};

const makeQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  queryClient.setQueryData(
    ["fetchAllFacets", "type", ...Object.entries(primaryFacetParams)],
    typeFacetData,
  );
  queryClient.setQueryData(
    ["fetchBioProjectFacets", "objectType", ...Object.entries(bioProjectParams)],
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
      <QueryClientProvider client={makeQueryClient()}>
        <div className="bg-bg-canvas p-6">
          <Story />
        </div>
      </QueryClientProvider>
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
  play: async ({ canvas }) => {
    await expect(await canvas.findByRole("checkbox", { name: "BioProject (900)" })).toBeEnabled();
    await expect(
      await canvas.findByRole("checkbox", { name: "Umbrella BioProject (100)" }),
    ).toBeEnabled();
    await expect(await canvas.findByRole("textbox", { name: "Organization" })).toHaveValue("NCBI");
    await expect(await canvas.findByRole("textbox", { name: "Publication" })).toHaveValue("Nature");
    await expect(await canvas.findByRole("textbox", { name: "Grant" })).toHaveValue("NSF");
  },
} satisfies Story;
