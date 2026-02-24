import { http, HttpResponse } from "msw";
import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getJgaDatasetList = http.get<never, never, EntryListResponse>(
  API_PATH_JGA_DATASET_LIST,
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
          const type = "jga-dataset";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Human genomic dataset for disease association study",
            name: "Human genomic dataset for disease association study",
            description: "Human genomic dataset for disease association study",
            dbXrefsCount: { "jga-study": 1, "jga-policy": 1, "jga-dac": 1 },
            datePublished: "2023-04-15",
            dateModified: "2023-04-15",
            dateCreated: "2023-04-15",
          };
        }),
    });
  }
);
