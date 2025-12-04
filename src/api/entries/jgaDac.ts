import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_JGA_DAC_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaDacListRequestParamsShape = {};
const jgaDacListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...jgaDacListRequestParamsShape,
});
export type JgaDacListRequestParams = z.infer<typeof jgaDacListRequestParamsSchema>;

export const jgaDacListRequestDoc: RouteConfig = {
  path: API_PATH_JGA_DAC_LIST,
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
                .extend({ type: z.literal("jga-dac") })
            ),
          }),
        },
      },
    },
  },
};
