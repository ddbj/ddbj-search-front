import * as z from "zod";
import { baseSearchSchema, paginationShape, publicationSearchShape } from "@/schema/search/base.ts";

export const sraRunSpecificShape = {
  ...publicationSearchShape,
} as const;
export const sraRunSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...sraRunSpecificShape,
});
export type SraRunSearchParams = z.infer<typeof sraRunSearchSchema>;
