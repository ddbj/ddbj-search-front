import { Xref, ElasticSearchSource } from "@/types/api.ts";

export const getTitle = (item: ElasticSearchSource): string => {
  switch (item.type) {
    case "jga-dac":
      return item.name || "";
    default:
      return item.title || item.description || item.name || "";
  }
};

export const getDbXrefs = (item: ElasticSearchSource): Xref[] => {
  return item.dbXref ?? [];
  // switch (item.type) {
  //   case "bioproject":
  //   case "biosample"
  //   default:
  //     return item.dbXrefs ?? [];
  // }
};

export const getSameAs = (item: ElasticSearchSource): Xref[] => {
  switch (item.type) {
    case "jga-dac":
      return [];
    default:
      return item.sameAs ?? [];
  }
};
