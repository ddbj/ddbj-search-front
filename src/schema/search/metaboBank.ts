import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const metaboBankSpecificShape = {
  ...publicationSearchShape,
} as const;
export const metaboBankSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...metaboBankSpecificShape,
});
export type MetaboBankSearchParams = z.infer<typeof metaboBankSearchSchema>;
