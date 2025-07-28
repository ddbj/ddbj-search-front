import { copy } from "copy-anything";
import type { AllResourcesKey, AllSearch } from "@/schema/search.ts";

export const removeFromSearch = (
  current: AllSearch,
  key: AllResourcesKey,
  value: string
): AllSearch => {
  const copied = copy(current);
  switch (key) {
    case "types":
    case "keywords":
      if (copied[key]) {
        copied[key] = copied[key].filter((t) => t.trim() !== value.trim());
      }
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
