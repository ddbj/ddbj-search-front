import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_JGA_STUDY_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchJgaStudies } from "@/fetch/entries/fetchJgaStudyEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { jgaStudySearchSchema } from "@/schema/search/jgaStudy.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_JGA_STUDY_LIST, ...Object.entries(params)],
    queryFn: () => fetchJgaStudies(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/jga-study/")({
  component: PageComponent,
  validateSearch: zodValidator(jgaStudySearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["jga-study"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
