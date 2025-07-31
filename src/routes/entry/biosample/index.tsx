import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { baseSearchSchema } from "@/schema/search.ts";
import type { ComponentProps } from "react";

export const Route = createFileRoute("/entry/biosample/")({
  component: PageComponent,
  validateSearch: zodValidator(baseSearchSchema),
});

function PageComponent() {
  const props = {
    entryType: dbTypes.biosample,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
