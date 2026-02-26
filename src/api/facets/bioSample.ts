import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { bioSampleListRequestParamsShape } from "@/api/entries/bioSample.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_BIOSAMPLE_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const bioSampleFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...bioSampleListRequestParamsShape,
});
export type BioSampleFacetListRequestParams = z.infer<typeof bioSampleFacetListRequestParamsSchema>;

export const bioSampleFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_BIOSAMPLE_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_BIOSAMPLE_FACET_LIST),
  description: "facets list for requesting BioSample entries",
  tags: [tags.facetList],
  request: {
    query: bioSampleFacetListRequestParamsSchema,
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
