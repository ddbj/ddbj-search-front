import { AppHttpError } from "@/fetch/utils/httpError.ts";
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
    statusCode: 404,
    title: "Page Not Found",
    description:
      "The page you requested does not exist or is not available from the current route.",
  },
} satisfies Story;

export const ServerError = {
  args: {
    statusCode: 500,
    title: "Server Error",
    description:
      "The server returned an error while loading this page. You can try again or return to a stable page.",
  },
} satisfies Story;

export const ServerErrorWithDetails = {
  args: {
    statusCode: 500,
    title: "Server Error",
    description:
      "The server returned an error while loading this page. You can try again or return to a stable page.",
    error: new AppHttpError("dblink database is not available", {
      status: 500,
      statusText: "Internal Server Error",
      url: "/search/api/entries/",
      requestId: "request-500",
    }),
  },
} satisfies Story;
