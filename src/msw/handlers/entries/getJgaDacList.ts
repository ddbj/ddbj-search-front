import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_JGA_DAC_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaDacListRequestParams } from "@/api/entries/jgaDac.ts";

export const getJgaDacList = http.get<
  JgaDacListRequestParams,
  {},
  EntryListResponse,
  typeof API_PATH_JGA_DAC_LIST
>(API_PATH_JGA_DAC_LIST, ({ request }) => {
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
          type: "jga-dac",
          title: "Data Access Committee for controlled genomic data",
          dbXrefs: { "jga-dataset": 10, "jga-study": 4, "jga-policy": 2 },
          datePublished: "2023-04-15",
        };
      }),
  });
});
