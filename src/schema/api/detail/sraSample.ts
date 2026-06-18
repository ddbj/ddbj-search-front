import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import {
  baseDetailRequestSchema,
  baseDetailResponseSchema,
  XrefSchema,
} from "@/schema/api/detail/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { addIdentifierToPath, API_PATH_SRA_SAMPLE_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const sraSampleDetailRequestParamsSchema = baseDetailRequestSchema.extend({});

const sraSampleDetailResponseSchema = baseDetailResponseSchema.omit({ type: true }).extend({
  type: z.literal("sra-sample"),
  collectionDate: z.string().nullable(),
  geoLocName: z.string().nullable(),
  derivedFrom: z.array(XrefSchema),
});

export type SraSampleDetailResponse = z.infer<typeof sraSampleDetailResponseSchema>;
const path = addIdentifierToPath(API_PATH_SRA_SAMPLE_LIST, "openAPI");

export const sraSampleDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  description: "SRA Sample detail",
  tags: [tags.searchResultDetail],
  request: {
    params: sraSampleDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: sraSampleDetailResponseSchema,
        },
      },
    },
  },
};
