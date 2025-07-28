import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { SearchResultPage } from "@/pages/SearchResultPage.tsx";
import { bioprojectSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/entry/bioproject/")({
  component: SearchResultPage,
  validateSearch: zodValidator(bioprojectSchema),
});
