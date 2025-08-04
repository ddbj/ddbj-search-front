import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SEARCH_ALL } from "@/consts/api.ts";
import { dbTypes } from "@/consts/db.ts";
import { useUpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { bioprojectSchema } from "@/schema/search.ts";
import type { ComponentProps } from "react";

export const Route = createFileRoute("/entry/bioproject/")({
  component: PageComponent,
  validateSearch: zodValidator(bioprojectSchema),
  loaderDeps: ({ search }) => ({ search }),
  loader: async ({ deps: { search } }) => {
    console.log(search);
    return fetch(API_PATH_SEARCH_ALL);
  },
});

function PageComponent() {
  const props = {
    entryType: dbTypes.bioproject,
    params: Route.useSearch(),
    updateFunctions: useUpdateSearchFunctions(),
  } satisfies ComponentProps<typeof SearchResultLayout>;
  return <SearchResultLayout {...props} />;
}
