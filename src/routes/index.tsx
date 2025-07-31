import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/layout/HomePage.tsx";

export const Route = createFileRoute("/")({
  component: PageComponent,
});

function PageComponent() {
  return <HomePage />;
}
