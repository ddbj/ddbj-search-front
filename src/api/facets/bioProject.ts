import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { bioProjectListRequestParamsShape } from "@/api/entries/bioProject.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { tags } from "@/api/openapiTags.ts";
import { API_PATH_BIOPROJECT_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import { bioProjectObjectTypeValues } from "@/api/valueTypes.ts";

const bioProjectFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...bioProjectListRequestParamsShape,
});
export type BioProjectFacetListRequestParams = z.infer<
  typeof bioProjectFacetListRequestParamsSchema
>;

const bioProjectObjectTypeFacetListShape = z
  .array(
    z.object({
      value: z.enum(bioProjectObjectTypeValues),
      count: z.number().int(),
    }),
  )
  .nullable();

const bioProjectFacetListResponseSchema = baseFacetListResponseSchema.extend({
  facets: baseFacetListResponseSchema.shape.facets.extend({
    objectType: bioProjectObjectTypeFacetListShape,
  }),
});
export type BioProjectFacetListResponse = z.infer<typeof bioProjectFacetListResponseSchema>;
export const isBioProjectFacetListResponse = (x: unknown): x is BioProjectFacetListResponse => {
  const parsed = bioProjectFacetListResponseSchema.safeParse(x);
  return parsed.success;
};

export const bioProjectFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_BIOPROJECT_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_BIOPROJECT_FACET_LIST),
  description: "facets list for requesting BioProject entries",
  tags: [tags.facetList],
  request: {
    query: bioProjectFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: bioProjectFacetListResponseSchema,
        },
      },
    },
  },
};
