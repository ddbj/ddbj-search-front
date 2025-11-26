import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/layout/AboutPage.tsx";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function About() {
  return <div className="p-2">Hello from About!</div>;
}
