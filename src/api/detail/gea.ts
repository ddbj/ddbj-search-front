import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_GEA_LIST, omitBaseApiPath } from "@/api/paths.ts";

const geaDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const geaDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("gea"),
  experimentType: z.array(z.string()),
});

export type GeaDetailResponse = z.infer<typeof geaDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_GEA_LIST, "openAPI");
export const geaDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "GEA detail",
  tags: [tags.searchResultDetail],
  request: {
    params: geaDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: geaDetailResponseSchema,
        },
      },
    },
  },
};
