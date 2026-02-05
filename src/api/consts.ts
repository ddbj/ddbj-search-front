export const booleanStrings = ["TRUE", "FALSE"] as const;
export type BooleanString = (typeof booleanStrings)[number];
export const tags = {
  searchResultList: "search result list",
  searchResultDetail: "search result detail",
  count: "count",
  dbXref: "dbXref",
};
