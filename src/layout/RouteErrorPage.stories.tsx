import { RouteErrorPage } from "./RouteErrorPage.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  component: RouteErrorPage,
  args: {},
  decorators: [],
} satisfies Meta<typeof RouteErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound = {
  args: {
    variant: "not-found",
    title: "Page not found",
    description: "The page you requested does not exist or is not available from the current route.",
  },
} satisfies Story;

export const ServerError = {
  args: {
    variant: "server-error",
    title: "Unexpected error",
    description:
      "An unexpected error occurred while loading this page. You can try again or return to a stable page.",
    error: new Error("dblink database is not available"),
  },
} satisfies Story;
