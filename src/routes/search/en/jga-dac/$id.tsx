import { createFileRoute } from "@tanstack/react-router";
import { DetailPage } from "@/pages/DetailPage.tsx";

export const Route = createFileRoute("/search/en/jga-dac/$id")({
  component: Detail,
});
function Detail() {
  return <DetailPage />;
}
