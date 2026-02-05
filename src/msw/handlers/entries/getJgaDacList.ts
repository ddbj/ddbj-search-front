import { http, HttpResponse } from "msw";
import { API_PATH_JGA_DAC_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaDacListRequestParams } from "@/api/entries/jgaDac.ts";

export const getJgaDacList = http.get<JgaDacListRequestParams, {}, EntryListResponse>(
  API_PATH_JGA_DAC_LIST,
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
          const type = "jga-dac";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Data Access Committee for controlled genomic data",
            dbXrefsCount: { "jga-dataset": 10, "jga-study": 4, "jga-policy": 2 },
            datePublished: "2023-04-15",
          };
        }),
    });
  }
);
