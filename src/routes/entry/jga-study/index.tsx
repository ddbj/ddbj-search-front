import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { baseSearchSchema } from "@/schema/search.ts";
import type { ComponentProps } from "react";
import { dummyResponse } from "@/consts/api.ts";

export const Route = createFileRoute("/entry/jga-study/")({
  component: PageComponent,
  validateSearch: zodValidator(baseSearchSchema),
});

function PageComponent() {
  const props = {
    entryType: dbTypes["jga-study"],
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
    data: dummyResponse,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
