import * as z from "zod";
import { dbTypeList } from "@/consts/db.ts";
import { baseSearchSchema, paginationShape } from "@/schema/search/base.ts";

export const allSearchSpecificShape = {
  types: z.array(z.enum(dbTypeList)).optional(),
};
export const allSearchSchema = baseSearchSchema.extend({
  ...paginationShape,
  ...allSearchSpecificShape,
});
export type AllSearchParams = z.infer<typeof allSearchSchema>;
export type AllSearchKeys = keyof AllSearchParams;
