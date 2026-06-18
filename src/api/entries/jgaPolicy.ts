import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/api/entries/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { API_PATH_JGA_POLICY_LIST, omitBaseApiPath } from "@/api/paths.ts";

export const jgaPolicyListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const jgaPolicyListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaPolicyListRequestParamsShape,
});
export type JgaPolicyListRequestParams = z.infer<typeof jgaPolicyListRequestParamsSchema>;

export const jgaPolicyListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_POLICY_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_POLICY_LIST),
  description: "JGA Policy list",
  tags: [tags.searchResultList],
  request: {
    query: jgaPolicyListRequestParamsSchema,
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
                .extend({ type: z.literal("jga-policy") }),
            ),
          }),
        },
      },
    },
  },
};
