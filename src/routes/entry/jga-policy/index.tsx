import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { fetchJgaPolicies } from "@/lib/fetch/entries/fetchJgaPolicyEntries.ts";
import { API_PATH_JGA_POLICY_LIST } from "@/schema/api/paths.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { jgaPolicySearchSchema } from "@/schema/search/jgaPolicy.ts";
import { useUpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { EntryListRouteContent } from "../-entryListRouteContent.tsx";

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
});

function PageComponent() {
  const search = Route.useSearch();
  return (
    <EntryListRouteContent
      entryType={dbTypes["jga-policy"]}
      params={search}
      updateFunctions={useUpdateSearchFunctions<SearchParams>(Route.useNavigate())}
      queryOptions={makeQuery(search)}
    />
  );
}
