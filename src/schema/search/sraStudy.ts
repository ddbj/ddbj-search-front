import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const sraStudySpecificShape = {} as const;
export const sraStudySearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraStudySpecificShape,
});
export type SraStudySearchParams = z.infer<typeof sraStudySearchSchema>;
