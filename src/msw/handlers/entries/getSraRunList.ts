import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraRunListRequestParams } from "@/api/entries/sraRun.ts";

export const getSraRunList = http.get<
  SraRunListRequestParams,
  {},
  EntryListResponse,
  typeof API_PATH_SRA_RUN_LIST
>(API_PATH_SRA_RUN_LIST, ({ request }) => {
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
          type: "sra-run",
          title: "Illumina HiSeq 2000 sequencing; GSM1234567: Sample 1",
          dbXrefs: { "sra-experiment": 1, "sra-sample": 1, biosample: 1 },
          datePublished: "2023-04-15",
        };
      }),
  });
});
