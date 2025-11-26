import { createFileRoute } from "@tanstack/react-router";

import "@scalar/api-reference-react/style.css";
import { ApiPage } from "@/layout/ApiPage.tsx";

export const Route = createFileRoute("/api-doc")({
  component: ApiPage,
});
