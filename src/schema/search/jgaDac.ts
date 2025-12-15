import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const jgaDacSpecificShape = {} as const;
export const jgaDacSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaDacSpecificShape,
});
export type JgaDacSearchParams = z.infer<typeof jgaDacSearchSchema>;
