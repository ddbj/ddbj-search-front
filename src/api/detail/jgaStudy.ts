import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_JGA_STUDY_LIST, omitBaseApiPath } from "@/api/paths.ts";

const jgaStudyDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const jgaStudyDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("jga-study"),
  studyType: z.array(z.string()),
  vendor: z.array(z.string()),
});

export type JgaStudyDetailResponse = z.infer<typeof jgaStudyDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_JGA_STUDY_LIST, "openAPI");
export const jgaStudyDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "JGA Study detail",
  tags: [tags.searchResultDetail],
  request: {
    params: jgaStudyDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: jgaStudyDetailResponseSchema,
        },
      },
    },
  },
};
