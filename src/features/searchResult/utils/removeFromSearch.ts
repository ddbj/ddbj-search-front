import { copy } from "copy-anything";
import type { AllSearchParamsKey, AllSearchParams } from "@/schema/search.ts";

export const removeFromSearch = (
  current: AllSearchParams,
  key: AllSearchParamsKey,
  value: string
): AllSearchParams => {
  const copied = copy(current);
  switch (key) {
    case "types":
    case "keywords":
      if (copied[key]) {
        copied[key] = copied[key].filter((t) => t.trim() !== value.trim());
      }
      if (copied[key]?.length === 0) delete copied[key];
      break;
    case "datePublished":
    case "dateUpdated":
    case "organization":
    case "publication":
    case "grant":
    case "umbrella":
      if (copied[key]) {
        delete copied[key];
      }
      break;
  }
  return copied;
};
