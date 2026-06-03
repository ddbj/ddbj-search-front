import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const jgaDacSpecificShape = {
  ...publicationSearchShape,
} as const;
export const jgaDacSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaDacSpecificShape,
});
export type JgaDacSearchParams = z.infer<typeof jgaDacSearchSchema>;
