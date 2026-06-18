import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { fetchJgaDacs } from "@/lib/fetch/entries/fetchJgaDacEntries.ts";
import { API_PATH_JGA_DAC_LIST } from "@/schema/api/paths.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { jgaDacSearchSchema } from "@/schema/search/jgaDac.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_JGA_DAC_LIST, ...Object.entries(params)],
    queryFn: () => fetchJgaDacs(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/jga-dac/")({
  component: PageComponent,
  validateSearch: zodValidator(jgaDacSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["jga-dac"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
