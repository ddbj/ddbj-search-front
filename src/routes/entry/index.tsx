import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_ALL_ENTRIES_LIST } from "@/api/paths.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchAllEntries } from "@/fetch/entries/fetchAllEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { allSearchSchema } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { ComponentProps } from "react";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_ALL_ENTRIES_LIST, ...Object.entries(params)],
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
    updateFunctions: useUpdateSearchFunctions<ReturnType<typeof Route.useSearch>>(
      Route.useNavigate()
    ),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
