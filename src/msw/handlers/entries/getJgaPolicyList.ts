import { http, HttpResponse } from "msw";
import { API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import { makeDummyIdentifier } from "@/msw/utils/makeDummyIdentifier.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

export const getJgaPolicyList = http.get<never, never, EntryListResponse>(
  API_PATH_JGA_POLICY_LIST,
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
          const type = "jga-policy";
          return {
            identifier: makeDummyIdentifier(type),
            type,
            title: "Data access policy for controlled access data",
            dbXrefsCount: { "jga-dataset": 5, "jga-study": 2, "jga-dac": 1 },
            datePublished: "2023-04-15", dateModified: "2023-04-15", dateCreated: "2023-04-15",
          };
        }),
    });
  }
);
