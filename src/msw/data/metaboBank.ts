import type { MetaboBankDetailResponse } from "@/api/detail/metaboBank.ts";

export const makeMetaboBankDetail = (identifier: string): MetaboBankDetailResponse => ({
  identifier,
  dateCreated: "2024-05-30T00:00:00Z",
  dateModified: "2024-06-02T00:00:00Z",
  datePublished: "2024-06-01T00:00:00Z",
  title: "MSW MetaboBank plasma biomarker study",
  organism: {
    identifier: "9606",
    name: "Homo sapiens",
  },
  description: "This is a mock MetaboBank detail for testing purposes.",
  publication: [],
  grant: [],
  type: "metabobank",
  accessibility: "public-access",
  status: "public",
  dbXrefs: [
    {
      identifier: "PRJDB000002",
      type: "bioproject",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/bioproject/PRJDB000002",
    },
    {
      identifier: "SAMD000002",
      type: "biosample",
      url: "https://ddbj-staging.nig.ac.jp/search/entry/biosample/SAMD000002",
    },
  ],
  dbXrefsCount: { bioproject: 1, biosample: 1 },
  properties: {},
  distribution: [],
  isPartOf: "MetaboBank",
  name: "MSW MetaboBank plasma biomarker study",
  url: `https://ddbj-staging.nig.ac.jp/search/entry/metabobank/${identifier}`,
  sameAs: [],
  organization: null,
  studyType: ["untargeted metabolite profiling"],
  experimentType: [
    "liquid chromatography-mass spectrometry",
    "fourier transform ion cyclotron resonance mass spectrometry",
  ],
  submissionType: ["LC-DAD-MS"],
});
