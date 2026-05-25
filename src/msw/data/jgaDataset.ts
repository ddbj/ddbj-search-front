import type { JgaDatasetDetailResponse } from "@/api/detail/jgaDataset.ts";

export const makeJgaDatasetDetail = (identifier: string): JgaDatasetDetailResponse => ({
  identifier,
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: "2024-01-02T00:00:00Z",
  datePublished: "2024-01-03T00:00:00Z",
  title: "MSW JGA Dataset Title",
  organism: null,
  description: "This is a mock JGA dataset detail for testing purposes.",
  publication: [],
  grant: [],
  type: "jga-dataset",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [],
  dbXrefsCount: {},
  externalLink: [
    {
      label: "JGA Dataset Browser",
      url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-dataset/${identifier}`,
    },
  ],
  properties: {},
  distribution: [],
  isPartOf: "JGA Dataset",
  name: null,
  url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-dataset/${identifier}`,
  sameAs: [],
  organization: null,
  datasetType: ["Exome"],
});
