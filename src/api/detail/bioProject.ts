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
    objectType: z.string(),
    organization: z.array(
      z.object({
        abbreviation: z.string().nullable(),
        name: z.string().nullable(),
        organizationType: z.string().nullable(),
        role: z.string().nullable(),
        url: z.string().nullable(),
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
        date: z.string().nullable(),
        Reference: z.string().nullable(),
        id: z.string(),
        title: z.string().nullable(),
        url: z.string().nullable(),
        DbType: z.string().nullable(),
        status: z.string().nullable(),
      })
    ),
    grant: z.array(
      z.object({
        title: z.string().nullable(),
        id: z.string(),
        agency: z.array(
          z.object({
            abbreviation: z.string().nullable(),
            name: z.string().nullable(),
          })
        ),
      })
    ),
  });
export type BioProjectDetailResponse = z.infer<typeof bioProjectDetailResponseSchema>;
export type Publication = BioProjectDetailResponse["publication"][0];
export type Grant = BioProjectDetailResponse["grant"][0];
export type Organization = BioProjectDetailResponse["organization"][0];

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
