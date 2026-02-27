import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/layout/AboutPage.tsx";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
