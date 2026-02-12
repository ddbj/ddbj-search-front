import { z } from "zod";

const facetCountShape = z.object({
  value: z.string(),
  count: z.number().int(),
});
export type FacetCount = z.infer<typeof facetCountShape>;
const facetListShape = z.array(facetCountShape);
export type FacetList = z.infer<typeof facetListShape>;

export const baseFacetListResponseSchema = z.object({
  facets: z.object({
    type: facetListShape,
    organism: facetListShape,
    status: facetListShape,
    accessibility: facetListShape,
  }),
});
