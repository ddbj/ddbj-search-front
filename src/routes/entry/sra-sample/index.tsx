import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchSraSamples } from "@/fetch/entries/fetchSraSampleEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraSampleSearchSchema } from "@/schema/search/sraSample.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_SAMPLE_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraSamples(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/sra-sample/")({
  component: PageComponent,
  validateSearch: zodValidator(sraSampleSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["sra-sample"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
