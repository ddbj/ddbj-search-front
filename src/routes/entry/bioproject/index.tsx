import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SEARCH } from "@/consts/api.ts";
import { dbTypes } from "@/consts/db.ts";
import { useDDBJSearchParams } from "@/features/searchResult/hooks/useDDBJSearch.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { bioprojectSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/entry/bioproject/")({
  component: PageComponent,
  validateSearch: zodValidator(bioprojectSchema),
  loaderDeps: ({ search }) => ({ search }),
  loader: async ({ deps: { search } }) => {
    console.log(search);
    return fetch(API_PATH_SEARCH);
  },
});

function PageComponent() {
  const searchParams = useDDBJSearchParams(Route.useSearch());
  return <SearchResultLayout entryType={dbTypes.bioproject} searchParams={searchParams} />;
}
