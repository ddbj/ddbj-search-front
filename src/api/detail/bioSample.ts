import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_BIOSAMPLE_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioProjectDetailRequestParamsSchema = baseDetailRequestSchema.extend({});
const bioProjectDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("bioproject"),
});
export type BioSampleDetailResponse = z.infer<typeof bioProjectDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_BIOSAMPLE_LIST, "openAPI");

export const bioSampleDetailRequestDoc: RouteConfig = {
  path,
  method: "get",
  summary: omitBaseApiPath(path),
  tags: [tags.searchResultDetail],
  request: {
    params: bioProjectDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: bioProjectDetailResponseSchema,
        },
      },
    },
  },
};
