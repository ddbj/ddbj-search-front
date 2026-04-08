import type { DBType } from "@/consts/db.ts";

const allKey = "all";
type AllKey = typeof allKey;
type DBTypeKeyWithAll = DBType | AllKey;

export const compileSearchType = (values: DBTypeKeyWithAll[]): DBType[] => {
  return values.filter((v) => v !== "all");
};
