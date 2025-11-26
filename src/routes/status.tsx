import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/layout/AboutPage.tsx";
import { StatusPage } from "@/layout/StatusPage.tsx";

export const Route = createFileRoute("/status")({
  component: StatusPage,
});
