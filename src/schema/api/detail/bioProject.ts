import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseDetailRequestSchema,
  baseDetailResponseSchema,
  XrefSchema,
} from "@/schema/api/detail/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_BIOPROJECT_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const bioProjectDetailRequestParamsSchema = baseDetailRequestSchema.extend({});
const bioProjectDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("bioproject"),
  })
  .extend({
    objectType: z.string(),
    projectType: z.array(z.string()),
    relevance: z.array(z.string()),
    parentBioProjects: z.array(XrefSchema),
    childBioProjects: z.array(XrefSchema),
  });
export type BioProjectDetailResponse = z.infer<typeof bioProjectDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_BIOPROJECT_LIST, "openAPI");
export const bioProjectDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
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
