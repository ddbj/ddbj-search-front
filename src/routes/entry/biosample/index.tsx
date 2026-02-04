import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchBioSamples } from "@/fetch/entries/fetchBioSampleEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { biosampleSearchSchema } from "@/schema/search/bioSample.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { ComponentProps } from "react";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_BIOSAMPLE_LIST, ...Object.entries(params)],
    queryFn: () => fetchBioSamples(params),
  });
};

export const Route = createFileRoute("/entry/biosample/")({
  component: PageComponent,
  validateSearch: zodValidator(biosampleSearchSchema),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: dbTypes.biosample,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions<ReturnType<typeof Route.useSearch>>(Route.useNavigate()),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
