import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_SUBMISSION_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraSubmissionDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraSubmissionDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("sra-submission"),
  });

export const sraSubmissionDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_SRA_SUBMISSION_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_SRA_SUBMISSION_LIST)}:identifier`,
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
