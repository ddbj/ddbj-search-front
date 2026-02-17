export const booleanStrings = ["true", "false"] as const;
export type BooleanString = (typeof booleanStrings)[number];
export const tags = {
  searchResultList: "search result list",
  searchResultDetail: "search result detail",
  facetList: "facet list",
  count: "count",
  dbXref: "dbXref",
};

export const accessibilityValues = ["public-access", "controlled-access"] as const;
export const statusValues = ["live", "suppressed", "unpublished"] as const;
