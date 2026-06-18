import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { fetchJgaPolicyDetail } from "@/lib/fetch/detail/fetchJgaPolicyDetail.ts";
import { ensureDetailQueryData } from "@/lib/router/ensureDetailQueryData.ts";
import { baseDetailRequestSchema } from "@/schema/api/detail/base.ts";
import { API_PATH_JGA_POLICY_LIST } from "@/schema/api/paths.ts";
import { SearchDetailView } from "@/views/searchDetail/SearchDetailView.tsx";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_JGA_POLICY_LIST, "detail", identifier],
    queryFn: () => fetchJgaPolicyDetail(identifier),
  });

export const Route = createFileRoute("/entry/jga-policy/$identifier")({
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
