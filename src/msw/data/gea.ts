import type { GeaDetailResponse } from "@/schema/api/detail/gea.ts";

export const makeGeaDetail = (identifier: string): GeaDetailResponse => ({
  identifier,
  dateCreated: "2024-04-30T00:00:00Z",
  dateModified: "2024-05-02T00:00:00Z",
  datePublished: "2024-05-01T00:00:00Z",
  title: "MSW GEA transcriptome analysis experiment",
  organism: {
    identifier: "9606",
    name: "Homo sapiens",
  },
  description: "This is a mock GEA detail for testing purposes.",
  publication: [],
  grant: [],
  type: "gea",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [
    {
      identifier: "PRJDB000001",
      type: "bioproject",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/bioproject/PRJDB000001",
    },
    {
      identifier: "SAMD000001",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMD000001",
    },
  ],
  dbXrefsCount: { bioproject: 1, biosample: 1 },
  properties: {},
  distribution: [],
  isPartOf: "GEA",
  name: "MSW GEA transcriptome analysis experiment",
  url: `https://ddbj-staging.nig.ac.jp/search/entry/gea/${identifier}`,
  sameAs: [],
  organization: null,
  experimentType: ["transcription profiling by array"],
});
