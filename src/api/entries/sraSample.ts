import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraSampleListRequestParamsShape = {};
const sraSampleListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraSampleListRequestParamsShape,
});
export type SraSampleListRequestParams = z.infer<typeof sraSampleListRequestParamsSchema>;

export const sraSampleListRequestDoc: RouteConfig = {
  path: API_PATH_SRA_SAMPLE_LIST,
  method: "get",
  summary: "SRA Sample list",
  tags: [tags.searchResultList],
  request: {
    query: sraSampleListRequestParamsSchema,
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
                .extend({ type: z.literal("sra-sample") })
            ),
          }),
        },
      },
    },
  },
};
