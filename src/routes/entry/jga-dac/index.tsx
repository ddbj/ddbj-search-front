import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { SearchResultPage } from "@/pages/SearchResultPage.tsx";
import { searchBaseSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/entry/jga-dac/")({
  component: SearchResultPage,
  validateSearch: zodValidator(searchBaseSchema),
});
