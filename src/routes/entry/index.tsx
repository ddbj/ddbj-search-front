import { queryOptions, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { fetchAllEntries } from "@/fetch/fetchAllEntries.ts";
import { allSearchSchema, type AnySearchParams } from "@/schema/search.ts";
import type { ComponentProps } from "react";
import { API_PATH_SEARCH_ALL } from "@/api/paths.ts";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SEARCH_ALL, ...Object.entries(params)],
    queryFn: () => fetchAllEntries(params),
  });
};

export const Route = createFileRoute("/entry/")({
  component: PageComponent,
  validateSearch: zodValidator(allSearchSchema),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: null,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
