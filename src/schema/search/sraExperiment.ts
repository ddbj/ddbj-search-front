import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const sraExperimentSpecificShape = {
  ...publicationSearchShape,
} as const;
export const sraExperimentSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraExperimentSpecificShape,
});
export type SraExperimentSearchParams = z.infer<typeof sraExperimentSearchSchema>;
