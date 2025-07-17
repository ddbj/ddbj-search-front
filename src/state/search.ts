import { copy } from "copy-anything";
import type { GlobalSearchSchemaType } from "@/schema/search.ts";

export const removeFromSearch = (
  current: GlobalSearchSchemaType,
  key: string,
  value: string
): GlobalSearchSchemaType => {
  const copied = copy(current);
  switch (key) {
    case "types":
    case "keywords":
      if (copied[key] && copied[key].includes(value)) {
        copied[key] = copied[key].filter((t) => t !== value);
      }
      break;
    case "datePublished":
    case "dateUpdated":
      if (copied[key]) {
        delete copied[key];
      }
      break;
  }
  return copied;
};
