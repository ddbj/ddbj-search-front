import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_SAMPLE_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const sraSampleListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const sraSampleListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraSampleListRequestParamsShape,
});
export type SraSampleListRequestParams = z.infer<typeof sraSampleListRequestParamsSchema>;

export const sraSampleListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_SAMPLE_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_SAMPLE_LIST),
  description: "SRA Sample list",
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
                .extend({ type: z.literal("sra-sample") }),
            ),
          }),
        },
      },
    },
  },
};
