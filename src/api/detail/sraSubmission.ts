import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_SUBMISSION_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraSubmissionDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraSubmissionDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-submission"),
});

export type SraSubmissionDetailResponse = z.infer<typeof sraSubmissionDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_SRA_SUBMISSION_LIST, "openAPI");
export const sraSubmissionDetailRequestDoc: RouteConfig = {
  path,
  method: "get",
  summary: omitBaseApiPath(path),
  description: "SRA Submission detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraSubmissionDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraSubmissionDetailResponseSchema,
        },
      },
    },
  },
};
