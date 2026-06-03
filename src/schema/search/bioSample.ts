import * as z from "zod";
import {
  baseSearchSchema,
  paginationShape,
  type SearchParamsWithUnsupportedDetailFilters,
} from "@/schema/search/base.ts";

export const bioSampleSpecificShape = {
  // Add BioSample-specific parameters here if needed
} as const;
export const biosampleSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...bioSampleSpecificShape,
});
export type BiosampleSearchParams = SearchParamsWithUnsupportedDetailFilters<
  z.infer<typeof biosampleSearchSchema>
>;
