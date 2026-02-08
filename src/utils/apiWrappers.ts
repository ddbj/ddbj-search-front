import { Xref, ElasticSearchSource } from "@/types/api.ts";

export const getTitle = (item: ElasticSearchSource): string => {
  return item.title || item.description || item.name || "";
};

export const getDbXrefs = (item: ElasticSearchSource): Xref[] => {
  return item.dbXrefs ?? [];
};

export const getSameAs = (item: ElasticSearchSource): Xref[] => {
  return item.sameAs ?? [];
};
