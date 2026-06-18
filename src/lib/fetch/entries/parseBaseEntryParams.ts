import type { BaseEntryListRequestParams } from "@/schema/api/entries/base.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

export const parseBaseEntryParams = (params: AnySearchParams): BaseEntryListRequestParams => {
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
  if (params.organism) {
    result.organism = params.organism;
  }
  if (params.organization) {
    result.organization = params.organization;
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
  if (params.sort) {
    result.sort = params.sort;
  }

  return result;
};
