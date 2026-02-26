import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { allEntryListRequestParamsShape } from "@/api/entries/all.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_ALL_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

export const allFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  // add allFacetSpecificFields here
  ...allEntryListRequestParamsShape,
});
export type AllFacetListRequestParams = z.infer<typeof allFacetListRequestParamsSchema>;
//
const allFacetListResponseScheme = baseFacetListResponseSchema.extend({
  // add allFacetSpecificFields here
});
export type AllFacetListResponse = z.infer<typeof allFacetListResponseScheme>;

export const allFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_ALL_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_ALL_FACET_LIST),
  description: "facets list for requesting all entries",
  tags: [tags.facetList],
  request: {
    query: allFacetListRequestParamsSchema,
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
