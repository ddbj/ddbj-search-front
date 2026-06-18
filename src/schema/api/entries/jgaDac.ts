import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_JGA_DAC_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const jgaDacListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const jgaDacListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaDacListRequestParamsShape,
});
export type JgaDacListRequestParams = z.infer<typeof jgaDacListRequestParamsSchema>;

export const jgaDacListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_DAC_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_DAC_LIST),
  description: "JGA DAC list",
  tags: [tags.searchResultList],
  request: {
    query: jgaDacListRequestParamsSchema,
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
                .extend({ type: z.literal("jga-dac") }),
            ),
          }),
        },
      },
    },
  },
};
