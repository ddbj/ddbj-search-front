import { http, HttpResponse } from "msw";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getBioSampleList = http.get<never, never, EntryListResponse>(
  API_PATH_BIOSAMPLE_LIST,
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
          const type = "biosample";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Soil sample from agricultural field",
            dbXrefs: { "sra-run": 5, "sra-experiment": 2, bioproject: 1 },
            datePublished: "2023-04-15",
          };
        }),
    });
  }
);
