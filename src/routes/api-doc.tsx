import { ApiReferenceReact } from "@scalar/api-reference-react";
import { createFileRoute } from "@tanstack/react-router";
import { getDocs } from "@/schema/openapi.ts";

import "@scalar/api-reference-react/style.css";
console.log(getDocs());

export const Route = createFileRoute("/api-doc")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ApiReferenceReact configuration={{ content: getDocs() }} />;
}
