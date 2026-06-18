import { createFileRoute } from "@tanstack/react-router";
import { ApiView } from "@/views/api/ApiView.tsx";
import "@scalar/api-reference-react/style.css";

export const Route = createFileRoute("/api-doc")({
  component: ApiView,
});
