import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { sraAnalysisListRequestParamsShape } from "@/schema/api/entries/sraAnalysis.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_ANALYSIS_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const sraAnalysisFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraAnalysisListRequestParamsShape,
});
export type SraAnalysisFacetListRequestParams = z.infer<
  typeof sraAnalysisFacetListRequestParamsSchema
>;

const sraAnalysisFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add sraAnalysisFacetSpecificFields here
});
export type SraAnalysisFacetListResponse = z.infer<typeof sraAnalysisFacetListResponseSchema>;

export const sraAnalysisFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_ANALYSIS_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_ANALYSIS_FACET_LIST),
  description: "facets list for requesting SRA Analysis entries",
  tags: [tags.facetList],
  request: {
    query: sraAnalysisFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: sraAnalysisFacetListResponseSchema,
        },
      },
    },
  },
};
