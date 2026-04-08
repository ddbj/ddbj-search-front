import { describe, expect, it } from "vitest";
import { AppHttpError } from "@/fetch/utils/httpError.ts";
import { __TEST__RouteErrorPage } from "@/layout/RouteErrorPage.tsx";

const { getRouteErrorPageModel } = __TEST__RouteErrorPage;

describe("RouteErrorPage", () => {
  it("should expose the 404 variant metadata", () => {
    const model = getRouteErrorPageModel("not-found", "Page not found");

    expect(model.variantLabel).toBe("404 Not Found");
    expect(model.variantAccentClassName).toContain("sky");
    expect(model.breadcrumbsPaths).toEqual([{ label: "Page not found" }]);
  });

  it("should expose the 500 variant metadata and request id", () => {
    const error = new AppHttpError("database is not available", {
      status: 500,
      statusText: "Internal Server Error",
      url: "/search/api/entries/",
      requestId: "request-500",
    });

    const model = getRouteErrorPageModel("server-error", "Unexpected error", error);

    expect(model.variantLabel).toBe("500 Server Error");
    expect(model.variantAccentClassName).toContain("amber");
    expect(model.requestId).toBe("request-500");
    expect(model.errorMessage).toBe("database is not available");
  });
});
