import { useQuery, type QueryKey, type UseQueryOptions } from "@tanstack/react-query";
import type { EntryListResponse } from "@/api/entries/base.ts";

export type EntryListQueryOptions<TQueryKey extends QueryKey> = UseQueryOptions<
  EntryListResponse,
  Error,
  EntryListResponse,
  TQueryKey
>;

const emptyEntryListResponse: EntryListResponse = {
  pagination: {
    page: 1,
    perPage: 20,
    total: 0,
  },
  items: [],
};

export const useEntryListRouteQuery = <TQueryKey extends QueryKey>(
  options: EntryListQueryOptions<TQueryKey>,
) => {
  const { data, isLoading } = useQuery({
    ...options,
    throwOnError: true,
  });

  return {
    data: data ?? emptyEntryListResponse,
    isLoading,
  };
};
