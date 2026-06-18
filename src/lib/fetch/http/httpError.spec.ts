import { describe, expect, it } from "vitest";
import {
  AppHttpError,
  createAppHttpError,
  isAppHttpError,
  isInvalidOrganismSearchParamError,
  parseJsonResponse,
} from "@/lib/fetch/http/httpError.ts";

describe("httpError", () => {
  it("should parse a successful JSON response", async () => {
    const response = new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });

    await expect(parseJsonResponse<{ ok: boolean }>(response)).resolves.toEqual({ ok: true });
  });

  it("should convert application/problem+json into AppHttpError", async () => {
    const response = new Response(
      JSON.stringify({
        title: "Internal Server Error",
        status: 500,
        detail: "database is not available",
        requestId: "request-123",
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
        headers: {
          "content-type": "application/problem+json",
        },
      },
    );

    await expect(parseJsonResponse(response)).rejects.toMatchObject({
      name: "AppHttpError",
      message: "database is not available",
      status: 500,
      requestId: "request-123",
      problem: {
        title: "Internal Server Error",
        status: 500,
        detail: "database is not available",
      },
    });
  });

  it("should fall back to x-request-id when the body does not include one", async () => {
    const response = new Response(JSON.stringify({ title: "Not Found", status: 404 }), {
      status: 404,
      statusText: "Not Found",
      headers: {
        "content-type": "application/json",
        "x-request-id": "header-request-id",
      },
    });

    const error = await createAppHttpError(response);

    expect(error).toBeInstanceOf(AppHttpError);
    expect(error.requestId).toBe("header-request-id");
    expect(error.message).toBe("Not Found");
  });

  it("should expose a type guard for AppHttpError", () => {
    expect(
      isAppHttpError(new AppHttpError("Failed", { status: 500, statusText: "Error", url: "" })),
    ).toBe(true);
    expect(isAppHttpError(new Error("Failed"))).toBe(false);
  });

  it("should detect invalid organism query errors", () => {
    expect(
      isInvalidOrganismSearchParamError(
        new AppHttpError("Invalid organism", {
          status: 422,
          statusText: "Unprocessable Entity",
          url: "",
          problem: {
            detail: "query.organism: String should match pattern '^\\d+$'",
          },
        }),
      ),
    ).toBe(true);
  });
});
