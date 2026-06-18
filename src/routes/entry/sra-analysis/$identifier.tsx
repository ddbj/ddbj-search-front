import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { fetchSraAnalysisDetail } from "@/lib/fetch/detail/fetchSraAnalysisDetail.ts";
import { ensureDetailQueryData } from "@/lib/router/ensureDetailQueryData.ts";
import { baseDetailRequestSchema } from "@/schema/api/detail/base.ts";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/schema/api/paths.ts";
import { SearchDetailView } from "@/views/searchDetail/SearchDetailView.tsx";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_SRA_ANALYSIS_LIST, "detail", identifier],
    queryFn: () => fetchSraAnalysisDetail(identifier),
  });

export const Route = createFileRoute("/entry/sra-analysis/$identifier")({
  component: RouteComponent,
  loader: async ({ context, params }) => {
    const { identifier } = baseDetailRequestSchema.parse(params);
    await ensureDetailQueryData(context.queryClient, makeQuery(identifier));
  },
});

function RouteComponent() {
  const { identifier } = Route.useParams();
  const { data } = useSuspenseQuery(makeQuery(identifier));

  const props = {
    data,
  } satisfies ComponentProps<typeof SearchDetailView>;
  return <SearchDetailView {...props} />;
}
