import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseEntryListRequestParamsSchema,
  entryListItemResponseSchema,
  entryListResponseSchema,
} from "@/api/entries/base.ts";
import { API_PATH_SRA_SUBMISSION_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraSubmissionListRequestParamsShape = {};
const sraSubmissionListRequestParamsSchema = baseEntryListRequestParamsSchema.extend({
  ...sraSubmissionListRequestParamsShape,
});
export type SraSubmissionListRequestParams = z.infer<typeof sraSubmissionListRequestParamsSchema>;

export const sraSubmissionListRequestDoc: RouteConfig = {
  path: API_PATH_SRA_SUBMISSION_LIST,
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
                .extend({ type: z.literal("sra-submission") })
            ),
          }),
        },
      },
    },
  },
};
