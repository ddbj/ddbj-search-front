import { createFileRoute } from "@tanstack/react-router";
import { ApiPage } from "@/layout/ApiPage.tsx";
import "@scalar/api-reference-react/style.css";

export const Route = createFileRoute("/__api-doc")({
  component: ApiPage,
});
