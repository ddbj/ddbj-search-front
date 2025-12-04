import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaDatasetListRequestParamsShape = {};
const jgaDatasetListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaDatasetListRequestParamsShape,
});
export type JgaDatasetListRequestParams = z.infer<typeof jgaDatasetListRequestParamsSchema>;

export const jgaDatasetListRequestDoc: RouteConfig = {
  path: API_PATH_JGA_DATASET_LIST,
  method: "get",
  summary: "JGA Dataset list",
  tags: [tags.searchResultList],
  request: {
    query: jgaDatasetListRequestParamsSchema,
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
                .extend({ type: z.literal("jga-dataset") })
            ),
          }),
        },
      },
    },
  },
};
