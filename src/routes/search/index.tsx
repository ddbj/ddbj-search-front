import { createFileRoute } from "@tanstack/react-router";
import { IndexPage } from "@/pages/IndexPage.tsx";

export const Route = createFileRoute("/search/")({
  component: Index,
});

function Index() {
  return <IndexPage />;
}
