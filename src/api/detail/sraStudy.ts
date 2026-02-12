import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_SRA_STUDY_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraStudyDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraStudyDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-study"),
});
export type SraStudyDetailResponse = z.infer<typeof sraStudyDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_SRA_STUDY_LIST, "openAPI");
export const sraStudyDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "SRA Study detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraStudyDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraStudyDetailResponseSchema,
        },
      },
    },
  },
};
