import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const jgaDatasetSpecificShape = {} as const;
export const jgaDatasetSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaDatasetSpecificShape,
});
export type JgaDatasetSearchParams = z.infer<typeof jgaDatasetSearchSchema>;
