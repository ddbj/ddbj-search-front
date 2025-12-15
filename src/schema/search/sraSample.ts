import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const sraSampleSpecificShape = {} as const;
export const sraSampleSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraSampleSpecificShape,
});
export type SraSampleSearchParams = z.infer<typeof sraSampleSearchSchema>;
