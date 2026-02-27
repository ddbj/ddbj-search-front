import { z } from "zod";
import { baseEntryListRequestParamsSchema } from "@/api/entries/base.ts";

const facetCountShape = z.object({
  value: z.string(),
  count: z.number().int(),
});
export type FacetCount = z.infer<typeof facetCountShape>;
export const facetListShape = z.array(facetCountShape).nullable();
export type FacetItem = NonNullable<z.infer<typeof facetListShape>>[0];

export const baseFacetListRequestParamsSchema = baseEntryListRequestParamsSchema.omit({
  page: true,
  perPage: true,
  includeFacets: true,
  includeProperties: true,
  dbXrefsLimit: true,
  sort: true,
});
export type BaseFacetListRequestParams = z.infer<typeof baseFacetListRequestParamsSchema>;

export const baseFacetListResponseSchema = z.object({
  facets: z.object({
    type: facetListShape,
    organism: facetListShape,
    status: facetListShape,
    accessibility: facetListShape,
  }),
});
export type BaseFacetListResponse = z.infer<typeof baseFacetListResponseSchema>;
