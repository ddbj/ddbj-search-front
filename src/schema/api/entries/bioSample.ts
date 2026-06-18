import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_BIOSAMPLE_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const bioSampleListRequestParamsShape = {};
const bioSampleListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...bioSampleListRequestParamsShape,
});
export type BiosampleListRequestParams = z.infer<typeof bioSampleListRequestParamsSchema>;

export const bioSampleListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_BIOSAMPLE_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_BIOSAMPLE_LIST),
  description: "BioSample list",
  tags: [tags.searchResultList],
  request: {
    query: bioSampleListRequestParamsSchema,
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
                .extend({ type: z.literal("biosample") }),
            ),
          }),
        },
      },
    },
  },
};
