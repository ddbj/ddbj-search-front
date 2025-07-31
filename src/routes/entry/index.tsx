import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { useDDBJSearchParams } from "@/features/searchResult/hooks/useDDBJSearch.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { allSearchSchemas, baseSearchSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/entry/")({
  component: PageComponent,
  validateSearch: zodValidator(allSearchSchemas),
  // loader: () => {
  //   return fetch(API_PATH_SEARCH);
  // },
});

function PageComponent() {
  const searchParams = useDDBJSearchParams(Route.useSearch());
  return <SearchResultLayout entryType={null} searchParams={searchParams} />;
}
