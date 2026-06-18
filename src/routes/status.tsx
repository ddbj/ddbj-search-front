import { createFileRoute } from "@tanstack/react-router";
import { StatusView } from "@/views/status/StatusView.tsx";

export const Route = createFileRoute("/status")({
  component: StatusView,
});
