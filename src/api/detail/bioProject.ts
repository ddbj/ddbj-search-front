import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const bioProjectDetailRequestParamsSchema = z.object({
  identifier: z.string(),
});
export const bioProjectDetailRequestDoc: RouteConfig = {
  path: `${API_PATH_BIOPROJECT_LIST}{identifier}`,
  method: "get",
  summary: "BioProject detail",
  tags: [tags.searchResultDetail],
  request: {
    params: bioProjectDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: z.object({
            identifier: z.string(),
            dateCreated: z.string().nullable(),
            dateModified: z.string().nullable(),
            datePublished: z.string().nullable(),
            type: z.literal("bioproject"),
            title: z.string(),
            organism: z.string().nullable(),
            description: z.string().nullable(),
          }),
        },
      },
    },
  },
};
