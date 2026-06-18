import { describe, expect, it } from "vitest";
import { AppHttpError } from "@/lib/fetch/http/httpError.ts";
import { __TEST__RouteErrorView } from "@/views/error/RouteErrorView.tsx";

const { getRouteErrorViewModel } = __TEST__RouteErrorView;

describe("RouteErrorView", () => {
  it("should expose the status-prefixed display title and explicit status code", () => {
    const model = getRouteErrorViewModel("Page Not Found", 404);

    expect(model.displayTitle).toBe("[404] Page Not Found");
    expect(model.breadcrumbsPaths).toEqual([{ label: "[404] Page Not Found" }]);
    expect(model.statusCode).toBe(404);
  });

  it("should expose the AppHttpError status code, request id and error message", () => {
    const error = new AppHttpError("database is not available", {
      status: 500,
      statusText: "Internal Server Error",
      url: "/search/api/entries/",
      requestId: "request-500",
    });

    const model = getRouteErrorViewModel("Server Error", undefined, error);

    expect(model.displayTitle).toBe("[500] Server Error");
    expect(model.statusCode).toBe(500);
    expect(model.requestId).toBe("request-500");
    expect(model.errorMessage).toBe("database is not available");
  });
});
