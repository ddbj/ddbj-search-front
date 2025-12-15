import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const jgaStudySpecificShape = {} as const;
export const jgaStudySearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaStudySpecificShape,
});
export type JgaStudySearchParams = z.infer<typeof jgaStudySearchSchema>;
