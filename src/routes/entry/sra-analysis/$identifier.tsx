import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_ANALYSIS_LIST } from "@/api/paths.ts";
import { fetchSraAnalysisDetail } from "@/fetch/detail/fetchSraAnalysisDetail.ts";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import { ensureDetailQueryData } from "@/utils/ensureDetailQueryData.ts";

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
  } satisfies ComponentProps<typeof SearchDetailLayout>;
  return <SearchDetailLayout {...props} />;
}
