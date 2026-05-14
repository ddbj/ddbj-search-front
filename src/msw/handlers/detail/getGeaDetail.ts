import { http, HttpResponse } from "msw";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_GEA_LIST } from "@/api/paths.ts";
import { resolveDetailFailureResponse } from "@/msw/handlers/detail/detailFailure.ts";

const path = addIdentifierToPath(API_PATH_GEA_LIST, "MSW");

export const getGeaDetail = http.get<BaseDetailRequestParams>(path, ({ params }) => {
  const { identifier } = params;
  const failureResponse = resolveDetailFailureResponse(
    identifier,
    `${API_PATH_GEA_LIST}${identifier}`,
  );

  if (failureResponse) {
    return failureResponse;
  }

  return HttpResponse.json({
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
  });
});
