import { z } from "zod";
import { baseEntryListRequestParamsSchema } from "@/api/entries/base.ts";

const facetCountShape = z.object({
  value: z.string(),
  count: z.number().int(),
});
export type FacetCount = z.infer<typeof facetCountShape>;
const facetListShape = z.array(facetCountShape);
export type FacetItem = z.infer<typeof facetListShape>[0];

export const baseFacetListRequestParamSchema = baseEntryListRequestParamsSchema.omit({
  page: true,
  perPage: true,
  includeFacets: true,
  includeProperties: true,
  dbXrefsLimit: true,
});
export type BaseFacetListRequestParam = z.infer<typeof baseFacetListRequestParamSchema>;

export const baseFacetListResponseSchema = z.object({
  facets: z.object({
    type: facetListShape,
    organism: facetListShape,
    status: facetListShape,
    accessibility: facetListShape,
  }),
});
