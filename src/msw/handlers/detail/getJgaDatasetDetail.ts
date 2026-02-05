import { http, HttpResponse } from "msw";
import { addIdentifierToPath, API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import type { BaseDetailRequestParams } from "@/api/detail/base.ts";
import type { JgaDatasetDetailResponse } from "@/api/detail/jgaDataset.ts";

const path = addIdentifierToPath(API_PATH_JGA_DATASET_LIST, "MSW");

export const getJgaDatasetDetail = http.get<
  BaseDetailRequestParams,
  never,
  JgaDatasetDetailResponse
>(path, ({ params }) => {
  const { identifier } = params;

  return HttpResponse.json<JgaDatasetDetailResponse>({
    identifier,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: "2024-01-02T00:00:00Z",
    datePublished: "2024-01-03T00:00:00Z",
    title: "MSW JGA Dataset Title",
    organism: null,
    description: "This is a mock JGA dataset detail for testing purposes.",
    type: "jga-dataset",
    visibility: "Unrestricted",
    status: "public",
    dbXrefs: [],
    dbXrefsCount: {},
    properties: {},
    downloadUrl: null,
  });
});
