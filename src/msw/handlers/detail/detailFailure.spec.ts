import { describe, expect, it } from "vitest";
import { __TEST__detailFailure } from "@/msw/handlers/detail/detailFailure.ts";

const { createProblemDetailResponse, resolveDetailFailureResponse } = __TEST__detailFailure;

describe("detailFailure", () => {
  it("should create an application/problem+json response", async () => {
    const response = createProblemDetailResponse({
      type: "about:blank",
      title: "Internal Server Error",
      status: 500,
      detail: "database is not available",
      instance: "/search/api/entries/",
      requestId: "request-500",
    });

    expect(response.status).toBe(500);
    expect(response.headers.get("content-type")).toContain("application/problem+json");
    expect(response.headers.get("x-request-id")).toBe("request-500");
  });

  it("should resolve a 404 failure response for NOTFOUND identifiers", async () => {
    const response = resolveDetailFailureResponse("NOTFOUND0001", "/search/api/entries/detail/");

    expect(response?.status).toBe(404);
    await expect(response?.json()).resolves.toMatchObject({
      title: "Not Found",
      status: 404,
      detail: "NOTFOUND0001 was not found",
    });
  });

  it("should resolve a 500 failure response for ERROR500 identifiers", async () => {
    const response = resolveDetailFailureResponse("ERROR5000001", "/search/api/entries/detail/");

    expect(response?.status).toBe(500);
    await expect(response?.json()).resolves.toMatchObject({
      title: "Internal Server Error",
      status: 500,
      detail: "Mock server error for ERROR5000001",
    });
  });

  it("should return null for normal identifiers", () => {
    expect(resolveDetailFailureResponse("DRA000001", "/search/api/entries/detail/")).toBeNull();
  });
});
