import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_BIOPROJECT_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchBioProjects } from "@/lib/fetch/entries/fetchBioProjectEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { bioprojectSearchSchema } from "@/schema/search/bioProject.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_BIOPROJECT_LIST, ...Object.entries(params)],
    queryFn: () => fetchBioProjects(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/bioproject/")({
  component: PageComponent,
  validateSearch: zodValidator(bioprojectSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes.bioproject}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
