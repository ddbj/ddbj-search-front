import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dummyResponse } from "@/consts/api.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { baseSearchSchema } from "@/schema/search.ts";
import type { ComponentProps } from "react";

export const Route = createFileRoute("/entry/sra-sample/")({
  component: PageComponent,
  validateSearch: zodValidator(baseSearchSchema),
});

function PageComponent() {
  const props = {
    entryType: dbTypes["sra-sample"],
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
    data: dummyResponse,
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
