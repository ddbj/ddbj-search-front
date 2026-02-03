import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchSraAnalyses } from "@/fetch/entries/fetchSraAnalysisEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { sraAnalysisSearchSchema } from "@/schema/search/sraAnalysis.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { ComponentProps } from "react";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_ANALYSIS_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraAnalyses(params),
  });
};

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
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
