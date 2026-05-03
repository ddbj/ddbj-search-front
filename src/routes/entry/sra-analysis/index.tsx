import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import type { ComponentProps } from "react";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchSraAnalyses } from "@/fetch/entries/fetchSraAnalysisEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraAnalysisSearchSchema } from "@/schema/search/sraAnalysis.ts";

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
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: dbTypes["sra-analysis"],
    params: search,
    updateFunctions: useUpdateSearchFunctions<SearchParams>(Route.useNavigate()),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
