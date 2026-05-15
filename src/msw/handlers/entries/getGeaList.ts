import { http, HttpResponse } from "msw";
import type { EntryListResponse } from "@/api/entries/base.ts";
import { API_PATH_GEA_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";

export const getGeaList = http.get<never, never, EntryListResponse>(
  API_PATH_GEA_LIST,
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
          const type = "gea";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Gene expression archive experiment for transcriptome analysis",
            name: "Gene expression archive experiment for transcriptome analysis",
            description: "Gene expression archive experiment for transcriptome analysis",
            dbXrefsCount: { bioproject: 1, biosample: 4, "sra-study": 1 },
            accessibility: "public-access",
            datePublished: "2024-05-01",
            dateModified: "2024-05-02",
            dateCreated: "2024-04-30",
          };
        }),
    });
  },
);
