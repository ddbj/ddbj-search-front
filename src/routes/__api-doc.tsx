import { createFileRoute } from "@tanstack/react-router";

import "@scalar/api-reference-react/style.css";
import { ApiPage } from "@/layout/ApiPage.tsx";

export const Route = createFileRoute("/__api-doc")({
  component: ApiPage,
});
