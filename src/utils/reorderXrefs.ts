import { isArray } from "is-what";
import { xrefTypeList } from "@/consts/db.ts";

export const reorderXrefs = <T>(list: Record<string, T> | [string, T][]): [string, T][] => {
  const arr = isArray(list) ? list : Object.entries(list);
  const inDb = arr
    .filter(([type]) => {
      return xrefTypeList.includes(type);
    })
    .sort(([keyA], [keyB]) => {
      const indexA = xrefTypeList.indexOf(keyA);
      const indexB = xrefTypeList.indexOf(keyB);
      return indexA - indexB;
    });
  const rest = arr
    .filter(([type]) => {
      return !xrefTypeList.includes(type);
    })
    .sort(([keyA], [keyB]) => {
      return keyA.localeCompare(keyB);
    });
  return [...inDb, ...rest];
};
