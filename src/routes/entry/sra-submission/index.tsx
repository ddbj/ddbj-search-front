import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import type { ComponentProps } from "react";
import { API_PATH_SRA_SUBMISSION_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { fetchSraSubmissions } from "@/fetch/entries/fetchSraSubmissionEntries.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { sraSubmissionSearchSchema } from "@/schema/search/sraSubmission.ts";

const makeQuery = (params: AnySearchParams) => {
  return queryOptions({
    queryKey: [API_PATH_SRA_SUBMISSION_LIST, ...Object.entries(params)],
    queryFn: () => fetchSraSubmissions(params),
  });
};

type SearchParams = ReturnType<typeof Route.useSearch>;
export const Route = createFileRoute("/entry/sra-submission/")({
  component: PageComponent,
  validateSearch: zodValidator(sraSubmissionSearchSchema),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: async ({ context, deps }) => await context.queryClient.ensureQueryData(makeQuery(deps)),
});

function PageComponent() {
  const search = Route.useSearch();
  const query = makeQuery(search);
  const { data } = useSuspenseQuery(query);

  const props = {
    entryType: dbTypes["sra-submission"],
    params: search,
    updateFunctions: useUpdateSearchFunctions<SearchParams>(Route.useNavigate()),
    data,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
