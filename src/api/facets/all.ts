import { z } from "zod";
import { tags } from "@/api/consts.ts";
import {
  allEntryListRequestParamSchema,
  allEntryListRequestParamShape,
} from "@/api/entries/all.ts";
import { baseFacetListRequestParamSchema, baseFacetListResponseSchema } from "@/api/facets/base.ts";
import { API_PATH_ALL_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
export const allFacetListRequestParamSchema = baseFacetListRequestParamSchema.extend({
  ...allEntryListRequestParamShape,
});
export type AllFacetListRequestParam = z.infer<typeof allFacetListRequestParamSchema>;
//
const allFacetListResponseScheme = baseFacetListResponseSchema.extend({});
export type AllFacetListResponse = z.infer<typeof allFacetListResponseScheme>;

export const allFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_ALL_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_ALL_FACET_LIST),
  description: "facets list for requesting all entries",
  tags: [tags.facetList],
  request: {
    query: allFacetListRequestParamSchema,
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
