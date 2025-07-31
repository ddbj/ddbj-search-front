import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { allSearchSchemas } from "@/schema/search.ts";
import type { ComponentProps } from "react";

export const Route = createFileRoute("/entry/")({
  component: PageComponent,
  validateSearch: zodValidator(allSearchSchemas),
  // loader: () => {
  //   return fetch(API_PATH_SEARCH);
  // },
});

function PageComponent() {
  const props = {
    entryType: null,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
