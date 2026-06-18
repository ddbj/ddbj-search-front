import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
  publicationRequestParamsShape,
} from "@/schema/api/entries/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_SUBMISSION_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

export const sraSubmissionListRequestParamsShape = {
  ...publicationRequestParamsShape,
};
const sraSubmissionListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraSubmissionListRequestParamsShape,
});
export type SraSubmissionListRequestParams = z.infer<typeof sraSubmissionListRequestParamsSchema>;

export const sraSubmissionListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_SUBMISSION_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_SUBMISSION_LIST),
  description: "SRA Submission list",
  tags: [tags.searchResultList],
  request: {
    query: sraSubmissionListRequestParamsSchema,
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
                .extend({ type: z.literal("sra-submission") }),
            ),
          }),
        },
      },
    },
  },
};
