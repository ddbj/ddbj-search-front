import { http, HttpResponse } from "msw";
import { v4 as uuidv4 } from "uuid";
import { API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";
import type { JgaPolicyListRequestParams } from "@/api/entries/jgaPolicy.ts";

export const getJgaPolicyList = http.get<JgaPolicyListRequestParams, {}, EntryListResponse>(
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
          return {
            identifier: uuidv4().slice(0, 8),
            type: "jga-policy",
            title: "Data access policy for controlled access data",
            dbXrefs: { "jga-dataset": 5, "jga-study": 2, "jga-dac": 1 },
            datePublished: "2023-04-15",
          };
        }),
    });
  }
);
