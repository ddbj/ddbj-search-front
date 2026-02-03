import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchJgaDatasets } from "@/fetch/entries/fetchJgaDatasetEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { jgaDatasetSearchSchema } from "@/schema/search/jgaDataset.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { ComponentProps } from "react";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_JGA_DATASET_LIST, ...Object.entries(params)],
    queryFn: () => fetchJgaDatasets(params),
  });
};

export const Route = createFileRoute("/entry/jga-dataset/")({
  component: PageComponent,
  validateSearch: zodValidator(jgaDatasetSearchSchema),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: dbTypes["jga-dataset"],
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
