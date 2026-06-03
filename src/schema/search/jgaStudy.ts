import * as z from "zod";
import {
  baseSearchSchema,
  grantSearchShape,
  paginationShape,
  publicationSearchShape,
} from "@/schema/search/base.ts";

export const jgaStudySpecificShape = {
  ...publicationSearchShape,
  ...grantSearchShape,
} as const;
export const jgaStudySearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaStudySpecificShape,
});
export type JgaStudySearchParams = z.infer<typeof jgaStudySearchSchema>;
