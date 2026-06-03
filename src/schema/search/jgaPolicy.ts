import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const jgaPolicySpecificShape = {
  ...publicationSearchShape,
} as const;
export const jgaPolicySearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaPolicySpecificShape,
});
export type JgaPolicySearchParams = z.infer<typeof jgaPolicySearchSchema>;
