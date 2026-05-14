import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_METABOBANK_LIST, omitBaseApiPath } from "@/api/paths.ts";

export const metaboBankListRequestParamsShape = {};
const metaboBankListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...metaboBankListRequestParamsShape,
});
export type MetaboBankListRequestParams = z.infer<typeof metaboBankListRequestParamsSchema>;

export const metaboBankListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_METABOBANK_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_METABOBANK_LIST),
  description: "MetaboBank list",
  tags: [tags.searchResultList],
  request: {
    query: metaboBankListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: entryListResponseSchema.omit({ items: true }).extend({
            items: z.array(
              entryListItemResponseSchema
                .omit({ type: true })
                .extend({ type: z.literal("metabobank") }),
            ),
          }),
        },
      },
    },
  },
};
