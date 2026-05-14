import * as z from "zod";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const geaSpecificShape = {} as const;
export const geaSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...geaSpecificShape,
});
export type GeaSearchParams = z.infer<typeof geaSearchSchema>;
