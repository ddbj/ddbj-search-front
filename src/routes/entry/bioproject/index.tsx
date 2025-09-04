import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { type AnySearchParams, bioprojectSchema } from "@/schema/search.ts";
import type { ComponentProps } from "react";
import { API_PATH_SEARCH_ALL } from "@/api/paths.ts";
import { fetchBioProjects } from "@/fetch/fetchBioProjectEntries.ts";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SEARCH_ALL, ...Object.entries(params)],
    queryFn: () => fetchBioProjects(params),
  });
};

export const Route = createFileRoute("/entry/bioproject/")({
  component: PageComponent,
  validateSearch: zodValidator(bioprojectSchema),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: dbTypes.bioproject,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
