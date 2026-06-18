import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_METABOBANK_LIST } from "@/api/paths.ts";
import { fetchMetaboBankDetail } from "@/lib/fetch/detail/fetchMetaboBankDetail.ts";
import { ensureDetailQueryData } from "@/lib/router/ensureDetailQueryData.ts";
import { SearchDetailView } from "@/views/searchDetail/SearchDetailView.tsx";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_METABOBANK_LIST, "detail", identifier],
    queryFn: () => fetchMetaboBankDetail(identifier),
  });

export const Route = createFileRoute("/entry/metabobank/$identifier")({
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
