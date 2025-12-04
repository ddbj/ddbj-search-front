import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { API_PATH_BIOSAMPLE_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioProjectDetailRequestParamsSchema = baseDetailRequestSchema.extend({});
const bioProjectDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("bioproject"),
});

export const bioSampleDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_BIOSAMPLE_LIST}:identifier`,
  method: "get",
  summary: `${omitBaseApiPath(API_PATH_BIOSAMPLE_LIST)}:identifier`,
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
