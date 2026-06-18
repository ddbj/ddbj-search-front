import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { fetchBioSampleDetail } from "@/fetch/detail/fetchBioSampleDetail.ts";
import { ensureDetailQueryData } from "@/utils/ensureDetailQueryData.ts";
import { SearchDetailView } from "@/views/searchDetail/SearchDetailView.tsx";

//
const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_BIOSAMPLE_LIST, "detail", identifier],
    queryFn: () => fetchBioSampleDetail(identifier),
  });

export const Route = createFileRoute("/entry/biosample/$identifier")({
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
