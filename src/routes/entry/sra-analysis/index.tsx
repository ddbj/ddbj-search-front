import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchSraAnalyses } from "@/lib/fetch/entries/fetchSraAnalysisEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraAnalysisSearchSchema } from "@/schema/search/sraAnalysis.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_ANALYSIS_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraAnalyses(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/sra-analysis/")({
  component: PageComponent,
  validateSearch: zodValidator(sraAnalysisSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["sra-analysis"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
