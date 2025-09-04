import type { BaseEntryListRequestParams } from "@/api/entries/base.ts";
import type { AnySearchParams } from "@/schema/search.ts";

export const parseBaseParams = (params: AnySearchParams): BaseEntryListRequestParams => {
  return {
    ...(params.page && params.page > 0 ? { page: params.page.toFixed().toString() } : {}),
    ...(params.perPage && params.perPage > 0
      ? { perPage: params.perPage.toFixed().toString() }
      : {}),
    ...(params.keywords && params.keywords.length ? { keywords: params.keywords.join(",") } : {}),
    ...(params.datePublished ? { datePublished: params.datePublished } : {}),
    ...(params.dateUpdated ? { dateUpdated: params.dateUpdated } : {}),
  } satisfies BaseEntryListRequestParams;
};
