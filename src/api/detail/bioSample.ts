import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  baseDetailRequestSchema,
  baseDetailResponseSchema,
  XrefSchema,
} from "@/api/detail/base.ts";
import { addIdentifierToPath, API_PATH_BIOSAMPLE_LIST, omitBaseApiPath } from "@/api/paths.ts";

const bioSamplePackageSchema = z.object({
  displayName: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
});

const bioSampleDetailRequestParamsSchema = baseDetailRequestSchema.extend({});
const bioSampleDetailResponseSchema = baseDetailResponseSchema
  .omit({ type: true })
  .extend({
    type: z.literal("biosample"),
  })
  .extend({
    model: z.array(z.string()).nullable(),
    package: bioSamplePackageSchema.nullable(),
    collectionDate: z.string().nullable(),
    geoLocName: z.string().nullable(),
    strain: z.string().nullable(),
    host: z.string().nullable(),
    isolate: z.string().nullable(),
    derivedFrom: z.array(XrefSchema).nullable(),
  });
export type BioSampleDetailResponse = z.infer<typeof bioSampleDetailResponseSchema>;

const path = addIdentifierToPath(API_PATH_BIOSAMPLE_LIST, "openAPI");

export const bioSampleDetailRequestDoc: RouteConfig = {
  path: omitBaseApiPath(path),
  method: "get",
  summary: omitBaseApiPath(path),
  tags: [tags.searchResultDetail],
  request: {
    params: bioSampleDetailRequestParamsSchema,
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: bioSampleDetailResponseSchema,
        },
      },
    },
  },
};
