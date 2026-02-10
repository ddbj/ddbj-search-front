import type { BaseEntryListRequestParams } from "@/api/entries/base.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";

export const parseBaseParams = (params: AnySearchParams): BaseEntryListRequestParams => {
  return {
    ...(params.page && params.page > 0 ? { page: params.page.toFixed().toString() } : {}),
    ...(params.perPage && params.perPage > 0
      ? { perPage: params.perPage.toFixed().toString() }
      : {}),
    ...(params.keywords && params.keywords.length ? { keywords: params.keywords.join(",") } : {}),
    ...(params.datePublishedFrom ? { datePublishedFrom: params.datePublishedFrom } : {}),
    ...(params.datePublishedTo ? { datePublishedTo: params.datePublishedTo } : {}),
    ...(params.dateModifiedFrom ? { dateModifiedFrom: params.dateModifiedFrom } : {}),
    ...(params.dateModifiedTo ? { dateModifiedTo: params.dateModifiedTo } : {}),
    ...{ includeFacets: "false", includeProperties: "false", dbXrefsLimit: "0" },
  } satisfies BaseEntryListRequestParams;
};
