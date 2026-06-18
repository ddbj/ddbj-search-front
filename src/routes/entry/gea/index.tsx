import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_GEA_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchGeaEntries } from "@/fetch/entries/fetchGeaEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { geaSearchSchema } from "@/schema/search/gea.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_GEA_LIST, ...Object.entries(params)],
    queryFn: () => fetchGeaEntries(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/gea/")({
  component: PageComponent,
  validateSearch: zodValidator(geaSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes.gea}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
