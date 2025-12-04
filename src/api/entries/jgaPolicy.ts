import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_JGA_POLICY_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaPolicyListRequestParamsShape = {};
const jgaPolicyListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaPolicyListRequestParamsShape,
});
export type JgaPolicyListRequestParams = z.infer<typeof jgaPolicyListRequestParamsSchema>;

export const jgaPolicyListRequestDoc: RouteConfig = {
  path: API_PATH_JGA_POLICY_LIST,
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
                .extend({ type: z.literal("jga-policy") })
            ),
          }),
        },
      },
    },
  },
};
