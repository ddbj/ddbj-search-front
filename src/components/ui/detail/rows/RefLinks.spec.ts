import { describe, it, expect } from "vitest";

describe("RefLinks", () => {
  it("xref URLs are used as-is", () => {
    // xref URLs from ES are complete URLs, used directly as link href
    const url = "https://ddbj.nig.ac.jp/search/entries/biosample/SAMD00040647";
    expect(url).toBe("https://ddbj.nig.ac.jp/search/entries/biosample/SAMD00040647");
  });
});
