import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { jgaDatasetListRequestParamsShape } from "@/api/entries/jgaDataset.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_JGA_DATASET_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const jgaDatasetFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...jgaDatasetListRequestParamsShape,
});
export type JgaDatasetFacetListRequestParams = z.infer<
  typeof jgaDatasetFacetListRequestParamsSchema
>;

const jgaDatasetFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add jgaDatasetFacetSpecificFields here
});
export type JgaDatasetFacetListResponse = z.infer<typeof jgaDatasetFacetListResponseSchema>;

export const jgaDatasetFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_JGA_DATASET_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_JGA_DATASET_FACET_LIST),
  description: "facets list for requesting JGA Dataset entries",
  tags: [tags.facetList],
  request: {
    query: jgaDatasetFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: jgaDatasetFacetListResponseSchema,
        },
      },
    },
  },
};
