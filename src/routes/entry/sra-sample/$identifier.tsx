import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { fetchSraSampleDetail } from "@/lib/fetch/detail/fetchSraSampleDetail.ts";
import { ensureDetailQueryData } from "@/lib/router/ensureDetailQueryData.ts";
import { SearchDetailView } from "@/views/searchDetail/SearchDetailView.tsx";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_SRA_SAMPLE_LIST, "detail", identifier],
    queryFn: () => fetchSraSampleDetail(identifier),
  });

export const Route = createFileRoute("/entry/sra-sample/$identifier")({
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
