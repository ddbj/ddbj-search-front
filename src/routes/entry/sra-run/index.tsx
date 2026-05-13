import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchSraRuns } from "@/fetch/entries/fetchSraRunEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraRunSearchSchema } from "@/schema/search/sraRun.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_RUN_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraRuns(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/sra-run/")({
  component: PageComponent,
  validateSearch: zodValidator(sraRunSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["sra-run"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
