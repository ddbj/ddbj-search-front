import type { RouteConfig } from "@asteasolutions/zod-to-openapi/dist/openapi-registry";
import { z } from "zod";
import { sraSubmissionListRequestParamsShape } from "@/schema/api/entries/sraSubmission.ts";
import {
  baseFacetListRequestParamsSchema,
  baseFacetListResponseSchema,
} from "@/schema/api/facets/base.ts";
import { tags } from "@/schema/api/openapiTags.ts";
import { API_PATH_SRA_SUBMISSION_FACET_LIST, omitBaseApiPath } from "@/schema/api/paths.ts";

const sraSubmissionFacetListRequestParamsSchema = baseFacetListRequestParamsSchema.extend({
  ...sraSubmissionListRequestParamsShape,
});
export type SraSubmissionFacetListRequestParams = z.infer<
  typeof sraSubmissionFacetListRequestParamsSchema
>;

const sraSubmissionFacetListResponseSchema = baseFacetListResponseSchema.extend({
  // add sraSubmissionFacetSpecificFields here
});
export type SraSubmissionFacetListResponse = z.infer<typeof sraSubmissionFacetListResponseSchema>;

export const sraSubmissionFacetListRequestDoc: RouteConfig = {
  path: omitBaseApiPath(API_PATH_SRA_SUBMISSION_FACET_LIST),
  method: "get",
  summary: omitBaseApiPath(API_PATH_SRA_SUBMISSION_FACET_LIST),
  description: "facets list for requesting SRA Submission entries",
  tags: [tags.facetList],
  request: {
    query: sraSubmissionFacetListRequestParamsSchema,
  },
  responses: {
    200: {
      description: "",
      content: {
        "application/json": {
          schema: sraSubmissionFacetListResponseSchema,
        },
      },
    },
  },
};
