import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseEntryListRequestParamsSchema, entryListResponseSchema } from "@/api/entries/base.ts";
import { API_PATH_ALL_ENTRIES_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const allEntryListRequestParamShape = {
  types: z
    .string()
    .optional()
    .meta({ description: "Comma separated list of DB types", example: "biosample,bioproject" }),
};
export const allEntryListRequestParamSchema = baseEntryListRequestParamsSchema.extend({
  ...allEntryListRequestParamShape,
});
export type AllEntryListRequestParams = z.infer<typeof allEntryListRequestParamSchema>;
export const allEntryListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_ALL_ENTRIES_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_ALL_ENTRIES_LIST),
  description: "All entries list",
  tags: [tags.searchResultList],
  request: {
    query: allEntryListRequestParamSchema,
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
