import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_JGA_DATASET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const jgaDatasetListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const jgaDatasetListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaDatasetListRequestParamsShape,
});
export type JgaDatasetListRequestParams = z.infer<typeof jgaDatasetListRequestParamsSchema>;

export const jgaDatasetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_DATASET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_DATASET_LIST),
  description: "JGA Dataset list",
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
                .extend({ type: z.literal("jga-dataset") }),
            ),
          }),
        },
      },
    },
  },
};
