import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_RUN_LIST } from "@/api/paths.ts";
import { fetchSraRunDetail } from "@/fetch/detail/fetchSraRunDetail.ts";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import type { ComponentProps } from "react";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_SRA_RUN_LIST, "detail", identifier],
    queryFn: () => fetchSraRunDetail(identifier),
  });

export const Route = createFileRoute("/entry/sra-run/$identifier")({
  component: RouteComponent,
  loader: async ({ context, params }) => {
    const { identifier } = baseDetailRequestSchema.parse(params);
    await context.queryClient.ensureQueryData(makeQuery(identifier));
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
