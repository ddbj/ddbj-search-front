import { describe, expect, it } from "vitest";
import { sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";

describe("sanitizeDbLink", () => {
  it("should sanitize internal db link", () => {
    const url = "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR4184766";
    const result = sanitizeDbLink(url);
    expect(result).toBe("/entry/sra-run/SRR4184766/");
  });
  it("should handle trailing slash", () => {
    const url = "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR4184766/";
    const result = sanitizeDbLink(url);
    expect(result).toBe("/entry/sra-run/SRR4184766/");
  });
  it("should return external link", () => {
    const url = "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_025407945";
    const result = sanitizeDbLink(url);
    expect(result).toBe(url);
  });
});
