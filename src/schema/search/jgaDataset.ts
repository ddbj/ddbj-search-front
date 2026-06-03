import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const jgaDatasetSpecificShape = {
  ...publicationSearchShape,
} as const;
export const jgaDatasetSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaDatasetSpecificShape,
});
export type JgaDatasetSearchParams = z.infer<typeof jgaDatasetSearchSchema>;
