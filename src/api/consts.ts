export const booleanStrings = ["true", "false"] as const;
export type BooleanString = (typeof booleanStrings)[number];
export const tags = {
  searchResultList: "search result list",
  searchResultDetail: "search result detail",
  facetList: "facet list",
  count: "count",
  dbXref: "dbXref",
};
