import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraRunListRequestParamsShape = {};
const sraRunListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraRunListRequestParamsShape,
});
export type SraRunListRequestParams = z.infer<typeof sraRunListRequestParamsSchema>;

export const sraRunListRequestDoc: RouteConfig = {
  path: API_PATH_SRA_RUN_LIST,
  method: "get",
  summary: "SRA Run list",
  tags: [tags.searchResultList],
  request: {
    query: sraRunListRequestParamsSchema,
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
                .extend({ type: z.literal("sra-run") })
            ),
          }),
        },
      },
    },
  },
};
