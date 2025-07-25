import { copy } from "copy-anything";
import type { GeneralSearchSchemaType, SearchSchemaType } from "@/schema/search.ts";

export const removeFromSearch = (
  current: SearchSchemaType,
  key: string,
  value: string
): SearchSchemaType => {
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
      if (copied[key]) {
        delete copied[key];
      }
      break;
  }
  return copied;
};
