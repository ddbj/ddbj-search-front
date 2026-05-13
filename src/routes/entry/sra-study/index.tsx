import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SRA_STUDY_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchSraStudies } from "@/fetch/entries/fetchSraStudyEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraStudySearchSchema } from "@/schema/search/sraStudy.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_STUDY_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraStudies(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/sra-study/")({
  component: PageComponent,
  validateSearch: zodValidator(sraStudySearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["sra-study"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
