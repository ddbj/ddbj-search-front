import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const sraSubmissionSpecificShape = {
  ...publicationSearchShape,
} as const;
export const sraSubmissionSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraSubmissionSpecificShape,
});
export type SraSubmissionSearchParams = z.infer<typeof sraSubmissionSearchSchema>;
