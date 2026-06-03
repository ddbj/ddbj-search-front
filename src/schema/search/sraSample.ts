import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const sraSampleSpecificShape = {
  ...publicationSearchShape,
} as const;
export const sraSampleSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraSampleSpecificShape,
});
export type SraSampleSearchParams = z.infer<typeof sraSampleSearchSchema>;
