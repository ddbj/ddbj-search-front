import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { fetchSraRuns } from "@/lib/fetch/entries/fetchSraRunEntries.ts";
import { API_PATH_SRA_RUN_LIST } from "@/schema/api/paths.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraRunSearchSchema } from "@/schema/search/sraRun.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
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
