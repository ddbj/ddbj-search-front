import * as z from "zod";
import {
  baseSearchSchema,
  paginationShape,
  publicationSearchShape,
  type SearchParamsWithUnsupportedDetailFilters,
} from "@/schema/search/base.ts";

export const geaSpecificShape = {
  ...publicationSearchShape,
} as const;
export const geaSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...geaSpecificShape,
});
export type GeaSearchParams = SearchParamsWithUnsupportedDetailFilters<
  z.infer<typeof geaSearchSchema>
>;
