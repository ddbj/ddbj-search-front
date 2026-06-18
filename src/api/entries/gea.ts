import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/api/entries/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { API_PATH_GEA_LIST, omitBaseApiPath } from "@/api/paths.ts";

export const geaListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const geaListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...geaListRequestParamsShape,
});
export type GeaListRequestParams = z.infer<typeof geaListRequestParamsSchema>;

export const geaListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_GEA_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_GEA_LIST),
  description: "GEA list",
  tags: [tags.searchResultList],
  request: {
    query: geaListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema.omit({ items: true }).extend({
            items: z.array(
              entryListItemResponseSchema.omit({ type: true }).extend({ type: z.literal("gea") }),
            ),
          }),
        },
      },
    },
  },
};
