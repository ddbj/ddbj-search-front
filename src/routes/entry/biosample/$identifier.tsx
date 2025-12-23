import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { baseDetailRequestSchema } from "@/api/detail/base.ts";
import { API_PATH_BIOSAMPLE_LIST } from "@/api/paths.ts";
import { dbTypes } from "@/consts/db.ts";
import { fetchBioSampleDetail } from "@/fetch/detail/fetchBioSampleDetail.ts";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import type { ComponentProps } from "react";

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
    await context.queryClient.ensureQueryData(makeQuery(identifier));
  },
});

function RouteComponent() {
  const { identifier } = Route.useParams();
  const { data } = useSuspenseQuery(makeQuery(identifier));
  console.log(data);
  const props = {
    entryType: dbTypes.biosample,
  } satisfies ComponentProps<typeof SearchDetailLayout>;
  return <SearchDetailLayout {...props} />;
}
