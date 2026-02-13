import { http, HttpResponse } from "msw";
import { API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraStudyListRequestParams } from "@/api/entries/sraStudy.ts";

export const getSraStudyList = http.get<never, never, EntryListResponse>(
  API_PATH_SRA_STUDY_LIST,
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
          const type = "sra-study";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Whole genome sequencing of microbial community",
            dbXrefsCount: { "sra-experiment": 6, "sra-run": 12, biosample: 3, bioproject: 1 },
            datePublished: "2023-04-15", dateModified: "2023-04-15", dateCreated: "2023-04-15",
          };
        }),
    });
  }
);
