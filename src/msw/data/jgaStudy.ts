import type { JgaStudyDetailResponse } from "@/schema/api/detail/jgaStudy.ts";

export const makeJgaStudyDetail = (identifier: string): JgaStudyDetailResponse => ({
  identifier,
  dateCreated: "2024-01-01T00:00:00Z",
  dateModified: "2024-01-02T00:00:00Z",
  datePublished: "2024-01-03T00:00:00Z",
  title: "MSW JGA Study Title",
  organism: null,
  description: "This is a mock JGA Study detail for testing purposes.",
  publication: [],
  grant: [],
  type: "jga-study",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [],
  dbXrefsCount: {},
  externalLink: [
    {
      label: "JGA Study Browser",
      url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-study/${identifier}`,
    },
  ],
  properties: {},
  distribution: [],
  isPartOf: "JGA Study",
  name: null,
  url: `https://ddbj-staging.nig.ac.jp/search/entry/jga-study/${identifier}`,
  sameAs: [],
  organization: null,
  studyType: ["Case-Control"],
  vendor: ["Japanese Genotype-phenotype Archive"],
});
