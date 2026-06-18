import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/views/home/HomeView.tsx";

export const Route = createFileRoute("/")({
  component: PageComponent,
});

function PageComponent() {
  return <HomeView />;
}
