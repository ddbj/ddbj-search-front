import { useQuery, type QueryKey, type UseQueryOptions } from "@tanstack/react-query";
import type { EntryListResponse } from "@/api/entries/base.ts";
import { isInvalidOrganismSearchParamError } from "@/lib/fetch/http/httpError.ts";

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
  const { data, error, isLoading } = useQuery({
    ...options,
    throwOnError: (error) => !isInvalidOrganismSearchParamError(error),
  });

  return {
    data: isInvalidOrganismSearchParamError(error)
      ? emptyEntryListResponse
      : (data ?? emptyEntryListResponse),
    isLoading,
  };
};
