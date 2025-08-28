import { createFileRoute } from "@tanstack/react-router";
import { dbTypes } from "@/consts/db.ts";
import { SearchDetailLayout } from "@/layout/SearchDetailLayout.tsx";
import type { ComponentProps } from "react";

export const Route = createFileRoute("/entry/bioproject/$identifier")({
  component: RouteComponent,
});

function RouteComponent() {
  const props = {
    entryType: dbTypes.bioproject,
  } satisfies ComponentProps<typeof SearchDetailLayout>;
  return <SearchDetailLayout {...props} />;
}
