import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_ALL_ENTRIES_LIST } from "@/api/paths.ts";
import { fetchAllEntries } from "@/lib/fetch/entries/fetchAllEntries.ts";
import { allSearchSchema } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "./-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_ALL_ENTRIES_LIST, ...Object.entries(params)],
    queryFn: () => fetchAllEntries(params),
  });
};

export const Route = createFileRoute("/entry/")({
  component: PageComponent,
  validateSearch: zodValidator(allSearchSchema),
});

type SearchParams = ReturnType<typeof Route.useSearch>;
function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={null}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
