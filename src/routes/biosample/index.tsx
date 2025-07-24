import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { SearchResultPage } from "@/components/pages/SearchResultPage.tsx";
import { globalSearchSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/biosample/")({
  component: SearchResultPage,
  validateSearch: zodValidator(globalSearchSchema),
});
