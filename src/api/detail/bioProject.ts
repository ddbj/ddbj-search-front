import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_BIOPROJECT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioProjectDetailRequestParamsSchema = baseDetailRequestSchema.extend({});
const bioProjectDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("bioproject"),
  organization: z.string().nullable(),
  publication: z.string().nullable(),
  grant: z.string().nullable(),
});
export type BioProjectDetailResponse = z.infer<typeof bioProjectDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_BIOPROJECT_LIST, "openAPI");
export const bioProjectDetailRequestDoc: RouteConfig = {
  path,
  method: "get",
  summary: omitBaseApiPath(path),
  description: "BioProject detail",
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
