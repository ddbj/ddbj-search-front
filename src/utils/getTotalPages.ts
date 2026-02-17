import { MAX_ENTRIES } from "@/consts/consts.ts";

export const getTotalPages = (itemCount: number, perPage: number) => {
  const displayCount = Math.min(itemCount, MAX_ENTRIES);
  if (displayCount === 0) return 1;
  return Math.ceil(displayCount / perPage);
};
