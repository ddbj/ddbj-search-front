import { dbTypeList, dbTypes, isDBType } from "@/consts/db.ts";

export const reorderXrefs = <T>(list: Record<string, T>): [string, T][] => {
  const inDb = Object.entries(list)
    .filter(([key]) => isDBType(key))
    .sort((a, b) => {
      const indexA = dbTypeList.indexOf(a[0]);
      const indexB = dbTypeList.indexOf(b[0]);
      return indexA - indexB;
    });
  const rest = Object.entries(list).filter(([key]) => !isDBType(key));
  return [...inDb, ...rest];
};
