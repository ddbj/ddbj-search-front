import { http, HttpResponse } from "msw";
import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getSraSampleList = http.get<never, never, EntryListResponse>(
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
          const type = "sra-sample";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Sample from agricultural field experiment",
            name: "Sample from agricultural field experiment",
            description: "Sample from agricultural field experiment",
            dbXrefsCount: { "sra-experiment": 2, biosample: 1, bioproject: 1 },
            datePublished: "2023-04-15",
            dateModified: "2023-04-15",
            dateCreated: "2023-04-15",
          };
        }),
    });
  }
);
