import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const jgaPolicySpecificShape = {} as const;
export const jgaPolicySearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...jgaPolicySpecificShape,
});
export type JgaPolicySearchParams = z.infer<typeof jgaPolicySearchSchema>;
