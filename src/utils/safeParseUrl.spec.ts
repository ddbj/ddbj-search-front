import { describe, it, expect, vi, beforeEach } from "vitest";
import { safeParseUrl } from "./safeParseUrl";

describe("safeParseUrl", () => {
  beforeEach(() => {
    vi.stubGlobal("window", {
      location: {
        protocol: "https:",
        hostname: "example.com",
        port: "8080",
      },
    });
  });

  it("should parse a valid absolute URL", () => {
    const url = "https://ddbj.nig.ac.jp/search";
    const result = safeParseUrl(url);
    expect(result).toBeInstanceOf(URL);
    expect(result?.href).toBe("https://ddbj.nig.ac.jp/search");
  });

  it("should return null for an invalid URL", () => {
    const url = "not-a-url";
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = safeParseUrl(url);
    expect(result).toBeNull();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("should handle relative paths starting with /", () => {
    const url = "/some/path";
    const result = safeParseUrl(url);
    expect(result?.href).toBe("https://example.com:8080/some/path");
  });

  it("should handle relative paths starting with / without port", () => {
    vi.stubGlobal("window", {
      location: {
        protocol: "http:",
        hostname: "localhost",
        port: "",
      },
    });
    const url = "/path";
    const result = safeParseUrl(url);
    expect(result?.href).toBe("http://localhost/path");
  });

  it("should return null for an empty string", () => {
    const url = "";
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const result = safeParseUrl(url);
    expect(result).toBeNull();
    spy.mockRestore();
  });
});
