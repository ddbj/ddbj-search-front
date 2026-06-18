import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SRA_EXPERIMENT_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchSraExperiments } from "@/fetch/entries/fetchSraExperimentEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraExperimentSearchSchema } from "@/schema/search/sraExperiment.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_EXPERIMENT_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraExperiments(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/sra-experiment/")({
  component: PageComponent,
  validateSearch: zodValidator(sraExperimentSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["sra-experiment"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
