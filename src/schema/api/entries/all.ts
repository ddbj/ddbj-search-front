import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListResponseSchema,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_ALL_ENTRIES_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

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
