import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_JGA_POLICY_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchJgaPolicies } from "@/fetch/entries/fetchJgaPolicyEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { jgaPolicySearchSchema } from "@/schema/search/jgaPolicy.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { ComponentProps } from "react";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_JGA_POLICY_LIST, ...Object.entries(params)],
    queryFn: () => fetchJgaPolicies(params),
  });
};


type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/jga-policy/")({
  component: PageComponent,
  validateSearch: zodValidator(jgaPolicySearchSchema),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: dbTypes["jga-policy"],
    params: search,
    updateFunctions: useUpdateSearchFunctions<SearchParams>(Route.useNavigate()),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
