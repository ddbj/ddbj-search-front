import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { SraStudyListRequestParams } from "@/api/entries/sraStudy.ts";

export const getSraStudyList = http.get<SraStudyListRequestParams, {}, EntryListResponse>(
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
          return {
            identifier: uuidv4().slice(0, 8),
            type: "sra-study",
            title: "Whole genome sequencing of microbial community",
            dbXrefs: { "sra-experiment": 6, "sra-run": 12, biosample: 3, bioproject: 1 },
            datePublished: "2023-04-15",
          };
        }),
    });
  }
);
