import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_METABOBANK_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchMetaboBankEntries } from "@/fetch/entries/fetchMetaboBankEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { metaboBankSearchSchema } from "@/schema/search/metaboBank.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_METABOBANK_LIST, ...Object.entries(params)],
    queryFn: () => fetchMetaboBankEntries(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/metabobank/")({
  component: PageComponent,
  validateSearch: zodValidator(metaboBankSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes.metabobank}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
