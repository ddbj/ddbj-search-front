import { notFound } from "@tanstack/react-router";
import { isAppHttpError } from "@/fetch/utils/httpError.ts";
import type { EnsureQueryDataOptions, QueryClient, QueryKey } from "@tanstack/react-query";

export const ensureDetailQueryData = async <
  TQueryFnData,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryClient: Pick<QueryClient, "ensureQueryData">,
  queryOptions: EnsureQueryDataOptions<TQueryFnData, TError, TData, TQueryKey>
) => {
  try {
    await queryClient.ensureQueryData(queryOptions);
  } catch (error) {
    if (isAppHttpError(error) && error.status === 404) {
      throw notFound();
    }

    throw error;
  }
};
