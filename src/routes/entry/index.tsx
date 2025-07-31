import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { API_PATH_SEARCH } from "@/consts/api.ts";
import { SearchResultPage } from "@/pages/SearchResultPage.tsx";
import { searchBaseSchema } from "@/schema/search.ts";

export const Route = createFileRoute("/entry/")({
  component: SearchResultPage,
  validateSearch: zodValidator(searchBaseSchema),
  loader: () => {
    return fetch(API_PATH_SEARCH);
  },
});
