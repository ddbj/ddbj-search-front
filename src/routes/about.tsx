import { createFileRoute } from "@tanstack/react-router";
import { AboutView } from "@/views/about/AboutView.tsx";

export const Route = createFileRoute("/about")({
  component: AboutView,
});
