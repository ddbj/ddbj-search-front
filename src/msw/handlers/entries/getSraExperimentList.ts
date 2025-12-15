import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraExperimentListRequestParams } from "@/api/entries/sraExperiment.ts";

export const getSraExperimentList = http.get<
  SraExperimentListRequestParams,
  {},
  EntryListResponse,
  typeof API_PATH_SRA_EXPERIMENT_LIST
>(API_PATH_SRA_EXPERIMENT_LIST, ({ request }) => {
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
          type: "sra-experiment",
          title: "Illumina HiSeq 2000 paired end sequencing",
          dbXrefs: { "sra-run": 3, "sra-sample": 1, biosample: 1, bioproject: 1 },
          datePublished: "2023-04-15",
        };
      }),
  });
});
