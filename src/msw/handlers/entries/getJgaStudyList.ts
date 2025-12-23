import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_JGA_STUDY_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaStudyListRequestParams } from "@/api/entries/jgaStudy.ts";

export const getJgaStudyList = http.get<JgaStudyListRequestParams, {}, EntryListResponse>(
  API_PATH_JGA_STUDY_LIST,
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
            type: "jga-study",
            title: "Genome-wide association study of complex diseases",
            dbXrefs: { "jga-dataset": 3, "jga-policy": 1, "jga-dac": 1 },
            datePublished: "2023-04-15",
          };
        }),
    });
  }
);
