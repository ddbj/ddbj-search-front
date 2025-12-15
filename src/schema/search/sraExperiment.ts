import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const sraExperimentSpecificShape = {} as const;
export const sraExperimentSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraExperimentSpecificShape,
});
export type SraExperimentSearchParams = z.infer<typeof sraExperimentSearchSchema>;
