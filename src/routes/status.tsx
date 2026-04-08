import { createFileRoute } from "@tanstack/react-router";
import { StatusPage } from "@/layout/StatusPage.tsx";

export const Route = createFileRoute("/status")({
  component: StatusPage,
});
