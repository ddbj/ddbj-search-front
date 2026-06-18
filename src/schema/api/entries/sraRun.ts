import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_RUN_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const sraRunListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const sraRunListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraRunListRequestParamsShape,
});
export type SraRunListRequestParams = z.infer<typeof sraRunListRequestParamsSchema>;

export const sraRunListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_RUN_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_RUN_LIST),
  description: "SRA Run list",
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
                .extend({ type: z.literal("sra-run") }),
            ),
          }),
        },
      },
    },
  },
};
