import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { fetchSraStudies } from "@/lib/fetch/entries/fetchSraStudyEntries.ts";
import { API_PATH_SRA_STUDY_LIST } from "@/schema/api/paths.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraStudySearchSchema } from "@/schema/search/sraStudy.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
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
