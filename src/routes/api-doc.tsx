import { ApiReferenceReact } from "@scalar/api-reference-react";
import { createFileRoute } from "@tanstack/react-router";
import { getDocs } from "@/api/openapi.ts";

import "@scalar/api-reference-react/style.css";

export const Route = createFileRoute("/api-doc")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ApiReferenceReact configuration={{ content: getDocs() }} />;
}
