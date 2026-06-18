import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchJgaDatasets } from "@/fetch/entries/fetchJgaDatasetEntries.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { jgaDatasetSearchSchema } from "@/schema/search/jgaDataset.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_JGA_DATASET_LIST, ...Object.entries(params)],
    queryFn: () => fetchJgaDatasets(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/jga-dataset/")({
  component: PageComponent,
  validateSearch: zodValidator(jgaDatasetSearchSchema),
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["jga-dataset"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
