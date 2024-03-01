import { createFileRoute } from "@tanstack/react-router";
import { DetailPage } from "@/pages/DetailPage.tsx";
import { fetchDetail } from "@/utils/fetchDetail.ts";

export const Route = createFileRoute("/search/detail/$id")({
  component: Detail,
  loader: async ({ params: { id } }) => fetchDetail(id),
});
function Detail() {
  return <DetailPage />;
}
