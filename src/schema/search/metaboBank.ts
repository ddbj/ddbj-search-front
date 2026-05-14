import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const metaboBankSpecificShape = {} as const;
export const metaboBankSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...metaboBankSpecificShape,
});
export type MetaboBankSearchParams = z.infer<typeof metaboBankSearchSchema>;
