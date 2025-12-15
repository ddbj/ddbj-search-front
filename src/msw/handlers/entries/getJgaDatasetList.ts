import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaDatasetListRequestParams } from "@/api/entries/jgaDataset.ts";

export const getJgaDatasetList = http.get<
  JgaDatasetListRequestParams,
  {},
  EntryListResponse,
  typeof API_PATH_JGA_DATASET_LIST
>(API_PATH_JGA_DATASET_LIST, ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams;
  const page: number = parseInt(search.get("page") ?? "1");
  return HttpResponse.json({
    pagination: {
      page,
      perPage: 10,
      total: 10000,
    },
    items: Array(10)
      .fill(0)
      .map((_, _i) => {
        return {
          identifier: uuidv4().slice(0, 8),
          type: "jga-dataset",
          title: "Human genomic dataset for disease association study",
          dbXrefs: { "jga-study": 1, "jga-policy": 1, "jga-dac": 1 },
          datePublished: "2023-04-15",
        };
      }),
  });
});
