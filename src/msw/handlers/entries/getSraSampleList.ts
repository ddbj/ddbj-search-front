import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraSampleListRequestParams } from "@/api/entries/sraSample.ts";

export const getSraSampleList = http.get<SraSampleListRequestParams, {}, EntryListResponse>(
  API_PATH_SRA_SAMPLE_LIST,
  ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams;
    const page: number = parseInt(search.get("page") ?? "1", 10);
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
            type: "sra-sample",
            title: "Sample from agricultural field experiment",
            dbXrefs: { "sra-experiment": 2, biosample: 1, bioproject: 1 },
            datePublished: "2023-04-15",
          };
        }),
    });
  }
);
