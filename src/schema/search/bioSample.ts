import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const bioSampleSpecificShape = {
  // Add BioSample-specific parameters here if needed
} as const;
export const biosampleSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...bioSampleSpecificShape,
});
export type BiosampleSearchParams = z.infer<typeof biosampleSearchSchema>;
