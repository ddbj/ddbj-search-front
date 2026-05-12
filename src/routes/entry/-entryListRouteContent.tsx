import type { QueryKey } from "@tanstack/react-query";
import type { DBType } from "@/consts/db.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { type EntryListQueryOptions, useEntryListRouteQuery } from "./-useEntryListRouteQuery.ts";

type EntryListRouteContentProps<TQueryKey extends QueryKey> = {
  entryType: DBType | null;
  params: AnySearchParams;
  updateFunctions: UpdateSearchFunctions;
  queryOptions: EntryListQueryOptions<TQueryKey>;
};

export const EntryListRouteContent = <TQueryKey extends QueryKey>({
  entryType,
  params,
  updateFunctions,
  queryOptions,
}: EntryListRouteContentProps<TQueryKey>) => {
  const { data, isLoading } = useEntryListRouteQuery(queryOptions);

  return (
    <SearchResultLayout
      entryType={entryType}
      params={params}
      updateFunctions={updateFunctions}
      data={data}
      isLoading={isLoading}
    />
  );
};
