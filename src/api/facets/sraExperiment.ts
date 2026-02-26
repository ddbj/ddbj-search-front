import { z } from "zod";
import { tags } from "@/api/consts.ts";
import { sraExperimentListRequestParamsShape } from "@/api/entries/sraExperiment.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/api/facets/base.ts";
import { API_PATH_SRA_EXPERIMENT_FACET_LIST, omitBaseApiPath } from "@/api/paths.ts";
import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";

const sraExperimentFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraExperimentListRequestParamsShape,
});
export type SraExperimentFacetListRequestParams = z.infer<
  typeof sraExperimentFacetListRequestParamsSchema
>;

const sraExperimentFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add sraExperimentFacetSpecificFields here
});
export type SraExperimentFacetListResponse = z.infer<typeof sraExperimentFacetListResponseSchema>;

export const sraExperimentFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_EXPERIMENT_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_EXPERIMENT_FACET_LIST),
  description: "facets list for requesting SRA Experiment entries",
  tags: [tags.facetList],
  request: {
    query: sraExperimentFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: sraExperimentFacetListResponseSchema,
        },
      },
    },
  },
};
