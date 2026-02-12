import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_BIOPROJECT_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioProjectDetailRequestParamsSchema = baseDetailRequestSchema.extend({});
const bioProjectDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("bioproject"),
  })
  .extend({
    organization: z.array(
      z.object({
        abbreviation: z.string(),
        name: z.string(),
        organizationType: z.string(),
        role: z.string(),
        url: z.string(),
      })
    ),
    externalLink: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ),
    publication: z.array(
      z.object({
        date: z.string(),
        Reference: z.string().nullable(),
        id: z.string(),
        title: z.string(),
        url: z.string().nullable().optional(),
        DbType: z.string(),
        status: z.string(),
      })
    ),
    grant: z.array(
      z.object({
        title: z.string().optional(),
        id: z.string(),
        agency: z.array(
          z.object({
            abbreviation: z.string(),
            name: z.string(),
          })
        ),
      })
    ),
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
