import { http, HttpResponse } from "msw";
import type { EntryListResponse } from "@/api/entries/base.ts";
import { API_PATH_METABOBANK_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";

export const getMetaboBankList = http.get<never, never, EntryListResponse>(
  API_PATH_METABOBANK_LIST,
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
          const type = "metabobank";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Metabolome study for plasma biomarker analysis",
            name: "Metabolome study for plasma biomarker analysis",
            description: "Metabolome study for plasma biomarker analysis",
            dbXrefsCount: { bioproject: 1, biosample: 6 },
            datePublished: "2024-06-01",
            dateModified: "2024-06-02",
            dateCreated: "2024-05-30",
          };
        }),
    });
  },
);
