import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const sraAnalysisSpecificShape = {} as const;
export const sraAnalysisSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraAnalysisSpecificShape,
});
export type SraAnalysisSearchParams = z.infer<typeof sraAnalysisSearchSchema>;
