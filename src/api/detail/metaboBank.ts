import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { baseDetailRequestSchema, baseDetailResponseSchema } from "@/api/detail/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_METABOBANK_LIST, omitBaseApiPath } from "@/api/paths.ts";

const metaboBankDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const metaboBankDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("metabobank"),
  studyType: z.array(z.string()),
  experimentType: z.array(z.string()),
  submissionType: z.array(z.string()),
});

export type MetaboBankDetailResponse = z.infer<typeof metaboBankDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_METABOBANK_LIST, "openAPI");
export const metaboBankDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "MetaboBank detail",
  tags: [tags.searchResultDetail],
  request: {
    params: metaboBankDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: metaboBankDetailResponseSchema,
        },
      },
    },
  },
};
