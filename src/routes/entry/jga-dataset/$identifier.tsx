import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_JGA_DATASET_LIST } from "@/api/paths.ts";
import { fetchJgaDatasetDetail } from "@/fetch/detail/fetchJgaDatasetDetail.ts";
import { ensureDetailQueryData } from "@/utils/ensureDetailQueryData.ts";
import { SearchDetailView } from "@/views/searchDetail/SearchDetailView.tsx";

const makeQuery = (identifier: string) =>
  queryOptions({
    queryKey: [API_PATH_JGA_DATASET_LIST, "detail", identifier],
    queryFn: () => fetchJgaDatasetDetail(identifier),
  });

export const Route = createFileRoute("/entry/jga-dataset/$identifier")({
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
