import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_SRA_SAMPLE_LIST } from "@/api/paths.ts";
import { fetchSraSampleDetail } from "@/fetch/detail/fetchSraSampleDetail.ts";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import type { ComponentProps } from "react";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_SRA_SAMPLE_LIST, "detail", identifier],
    queryFn: () => fetchSraSampleDetail(identifier),
  });

export const Route = createFileRoute("/entry/sra-sample/$identifier")({
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
