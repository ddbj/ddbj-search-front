import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseEntryListRequestParamsSchema, entryListResponseSchema } from "@/api/entries/base.ts";
import { API_PATH_ALL_ENTRIES_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const allEntryListRequestParamsShape = {
  types: z
    .string()
    .optional()
    .meta({ description: "Comma separated list of DB types", example: "biosample,bioproject" }),
};
export const allEntryListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...allEntryListRequestParamsShape,
});
export type AllEntryListRequestParams = z.infer<typeof allEntryListRequestParamsSchema>;
export const allEntryListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_ALL_ENTRIES_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_ALL_ENTRIES_LIST),
  description: "All entries list",
  tags: [tags.searchResultList],
  request: {
    query: allEntryListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema,
        },
      },
    },
  },
};
