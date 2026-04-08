// This file stays under src/routes for colocation, and the leading "-"
// keeps TanStack Router from treating it as a route module.
import { describe, expect, it } from "vitest";
import { AppHttpError } from "@/fetch/utils/httpError.ts";
import { __TEST__RootRoute } from "@/routes/__root.tsx";

const { getRootErrorPageCopy } = __TEST__RootRoute;

describe("__root", () => {
  it("should show server error copy for 5xx AppHttpError", () => {
    const error = new AppHttpError("database is not available", {
      status: 500,
      statusText: "Internal Server Error",
      url: "/search/api/entries/",
      requestId: "request-500",
    });

    expect(getRootErrorPageCopy(error)).toEqual({
      title: "Server Error",
      description:
        "The server returned an error while loading this page. You can try again or return to a stable page.",
    });
  });

  it("should keep unexpected error copy for non-http errors", () => {
    expect(getRootErrorPageCopy(new Error("boom"))).toEqual({
      title: "Unexpected Error",
      description:
        "An unexpected error occurred while loading this page. You can try again or return to a stable page.",
    });
  });
});
