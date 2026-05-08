import type { Meta, StoryObj } from "@storybook/react-vite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { expect } from "storybook/test";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { AllFacetListResponse } from "@/api/facets/all.ts";
import type { FacetItem } from "@/api/facets/base.ts";
import type { BioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
import { dbTypes } from "@/consts/db.ts";
import { __SB_updateFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { makeOrganismFacetQueryKey } from "@/fetch/facets/fetchOrganismFacets.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { SearchResultLayout } from "./SearchResultLayout.tsx";

const primaryParams: AnySearchParams = {
  keywords: ["human microbiome"],
  types: ["biosample", "sra-analysis"],
  datePublishedFrom: "2021-01-01",
  datePublishedTo: "2024-12-31",
} as const;

const bioProjectParams: AnySearchParams = {
  keywords: ["metagenome"],
  organism: "562",
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
} as const;

const typeFacetData: AllFacetListResponse = {
  facets: {
    type: [
      { value: "bioproject", count: 90 },
      { value: "biosample", count: 120 },
      { value: "sra-analysis", count: 21 },
    ],
    organism: null,
    accessibility: null,
  },
};

const organismFacetData: FacetItem[] = [
  { value: "562", label: "Escherichia coli", count: 1232567 },
  { value: "9606", label: "Homo sapiens", count: 987654 },
  { value: "10090", label: "Mus musculus", count: 456789 },
];

const bioProjectFacetData: BioProjectFacetListResponse = {
  facets: {
    type: null,
    organism: null,
    accessibility: null,
    objectType: [
      { value: "BioProject", count: 72 },
      { value: "UmbrellaBioProject", count: 12 },
    ],
  },
};

const primaryData: EntryListResponse = {
  pagination: {
    page: 1,
    perPage: 10,
    total: 231,
  },
  items: [
    {
      identifier: "PRJDB000001",
      type: "bioproject",
      title: "DDBJ Search redesign validation data set",
      name: "DDBJ Search redesign validation data set",
      description: "A representative BioProject entry for search result layout review.",
      dbXrefsCount: { biosample: 12, "sra-study": 3 },
      datePublished: "2024-09-12",
      dateModified: "2025-03-01",
      dateCreated: "2024-09-10",
    },
    {
      identifier: "SAMD000001",
      type: "biosample",
      title: "Human gut microbiome sample",
      name: "Human gut microbiome sample",
      description: "A representative BioSample entry for mixed-type result layout review.",
      dbXrefsCount: { bioproject: 1, "sra-run": 4 },
      datePublished: "2024-02-18",
      dateModified: "2025-02-03",
      dateCreated: "2024-02-01",
    },
    {
      identifier: "DRA019999",
      type: "sra-analysis",
      title: "Metagenome assembly analysis",
      name: "Metagenome assembly analysis",
      description: "A representative SRA Analysis entry for mixed-type result layout review.",
      dbXrefsCount: { bioproject: 1, biosample: 2 },
      datePublished: "2023-11-02",
      dateModified: "2024-12-20",
      dateCreated: "2023-10-27",
    },
  ],
};

const bioProjectData: EntryListResponse = {
  pagination: {
    page: 1,
    perPage: 10,
    total: 84,
  },
  items: [
    {
      identifier: "PRJDB120001",
      type: "bioproject",
      title: "Umbrella project for DDBJ search migration review",
      name: "Umbrella project for DDBJ search migration review",
      description: "A representative umbrella BioProject entry for integrated filter review.",
      dbXrefsCount: { biosample: 8, "sra-study": 2, "sra-run": 14 },
      datePublished: "2022-06-30",
      dateModified: "2025-01-14",
      dateCreated: "2022-06-01",
    },
    {
      identifier: "PRJDB120002",
      type: "bioproject",
      title: "National Institute of Genetics sequencing initiative",
      name: "National Institute of Genetics sequencing initiative",
      description: "A representative organization-filtered BioProject entry.",
      dbXrefsCount: { biosample: 4, "sra-study": 1 },
      datePublished: "2021-12-15",
      dateModified: "2024-11-09",
      dateCreated: "2021-12-01",
    },
  ],
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
  queryClient.setQueryData(makeOrganismFacetQueryKey(null, primaryParams), organismFacetData);
  queryClient.setQueryData(
    ["fetchBioProjectFacets", "objectType", ...Object.entries(bioProjectParams)],
    bioProjectFacetData,
  );
  queryClient.setQueryData(
    makeOrganismFacetQueryKey(dbTypes.bioproject, bioProjectParams),
    organismFacetData,
  );
  return queryClient;
};

const meta = {
  component: SearchResultLayout,
  args: {
    updateFunctions: __SB_updateFunctions,
    entryType: null,
    params: primaryParams,
    data: primaryData,
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={makeQueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchResultLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All = {
  play: async ({ canvas }) => {
    const typesHeading = await canvas.findByRole("heading", { name: "Types" });
    const organismHeading = await canvas.findByRole("heading", { name: "Organism" });
    expect(
      typesHeading.compareDocumentPosition(organismHeading) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    await expect(
      await canvas.findByRole("checkbox", { name: "Escherichia coli (1,232,567)" }),
    ).toBeEnabled();
  },
} satisfies Story;
export const BioProject = {
  args: {
    entryType: dbTypes.bioproject,
    params: bioProjectParams,
    data: bioProjectData,
  },
  play: async ({ canvas }) => {
    const typeHeading = await canvas.findByRole("heading", { name: "Type" });
    const organismHeading = await canvas.findByRole("heading", { name: "Organism" });
    expect(
      typeHeading.compareDocumentPosition(organismHeading) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    await expect(
      await canvas.findByRole("checkbox", { name: "Escherichia coli (1,232,567)" }),
    ).toBeChecked();
  },
} satisfies Story;
