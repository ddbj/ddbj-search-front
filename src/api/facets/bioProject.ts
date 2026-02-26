import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { bioProjectListRequestParamsShape } from "@/api/entries/bioProject.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_BIOPROJECT_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const bioProjectFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...bioProjectListRequestParamsShape,
});
export type BioProjectFacetListRequestParams = z.infer<
  typeof bioProjectFacetListRequestParamsSchema
>;

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
          schema: baseFacetListResponseSchema,
        },
      },
    },
  },
};
