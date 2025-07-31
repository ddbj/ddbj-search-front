import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { dbTypes } from "@/consts/db.ts";
import { useDDBJSearchParams } from "@/features/searchResult/hooks/useDDBJSearch.ts";
import { SearchResultLayout } from "@/layout/SearchResultLayout.tsx";
import { baseSearchSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/entry/sra-run/")({
  component: PageComponent,
  validateSearch: zodValidator(baseSearchSchema),
});

function PageComponent() {
  const searchParams = useDDBJSearchParams(Route.useSearch());
  return <SearchResultLayout entryType={dbTypes["sra-run"]} searchParams={searchParams} />;
}
