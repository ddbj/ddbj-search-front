import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { SearchResultPage } from "@/components/pages/SearchResultPage.tsx";
import { generalSearchSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/all/")({
  component: SearchResultPage,
  validateSearch: zodValidator(generalSearchSchema),
});
