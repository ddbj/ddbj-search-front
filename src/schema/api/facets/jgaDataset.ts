import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { jgaDatasetListRequestParamsShape } from "@/schema/api/entries/jgaDataset.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_JGA_DATASET_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

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
