import type { SraRunDetailResponse } from "@/api/detail/sraRun.ts";

export const makeSraRunDetail = (identifier: string): SraRunDetailResponse => ({
  identifier,
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: "2024-01-02T00:00:00Z",
  datePublished: "2024-01-03T00:00:00Z",
  title: "MSW SRA Run Title",
  organism: null,
  description: "This is a mock SRA Run detail for testing purposes.",
  type: "sra-run",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [],
  dbXrefsCount: {},
  properties: {},
  distribution: [],
  isPartOf: "SRA Run",
  name: null,
  url: `https://ddbj-staging.nig.ac.jp/search/entry/sra-run/${identifier}`,
  sameAs: [],
  organization: [
    {
      abbreviation: "DDBJ",
      name: "DNA Data Bank of Japan",
      organizationType: "data center",
      role: "submitter",
      url: "https://www.ddbj.nig.ac.jp/",
    },
  ],
});
