import type { AllFacetListRequestParams } from "@/api/facets/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

export const parseBaseFacetParams = (params: AnySearchParams): AllFacetListRequestParams => {
  const result: AllFacetListRequestParams = {};
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
