import type { BaseEntryListRequestParams } from "@/api/entries/base.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

export const parseBaseParams = (params: AnySearchParams): BaseEntryListRequestParams => {
  const result: BaseEntryListRequestParams = {
    includeFacets: "false",
    includeProperties: "false",
    dbXrefsLimit: "0",
  };

  if (params.page && params.page > 0) {
    result.page = params.page.toFixed().toString();
  }
  if (params.perPage && params.perPage > 0) {
    result.perPage = params.perPage.toFixed().toString();
  }
  if (params.keywords && params.keywords.length) {
    result.keywords = params.keywords.join(",");
  }
  if (params.datePublishedFrom) {
    result.datePublishedFrom = params.datePublishedFrom;
  }
  if (params.datePublishedTo) {
    result.datePublishedTo = params.datePublishedTo;
  }
  if (params.dateModifiedFrom) {
    result.dateModifiedFrom = params.dateModifiedFrom;
  }
  if (params.dateModifiedTo) {
    result.dateModifiedTo = params.dateModifiedTo;
  }

  return result;
};
