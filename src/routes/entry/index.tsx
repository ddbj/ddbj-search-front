import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SEARCH_ALL } from "@/consts/api.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { fetchSearchAll } from "@/network/fetchSearchAll.ts";
import { type AllSearchParams, allSearchSchemas } from "@/schema/search.ts";
import type { ComponentProps } from "react";

const makeQuery = (params: AllSearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SEARCH_ALL, ...Object.entries(params)],
    queryFn: () => fetchSearchAll(params).then((r) => r.json()),
  });
};

export const Route = createFileRoute("/entry/")({
  component: PageComponent,
  validateSearch: zodValidator(allSearchSchemas),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const props = {
    entryType: null,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
