import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search/en/detail/$id")({
  component: Detail,
});
function Detail() {
  return <div className="p-2">Hello from Detail!</div>;
}
