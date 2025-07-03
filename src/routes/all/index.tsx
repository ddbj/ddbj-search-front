import { createFileRoute } from "@tanstack/react-router";
import { SearchResultPage } from "@/components/pages/SearchResultPage.tsx";

export const Route = createFileRoute("/all/")({
  component: SearchResultPage,
});
