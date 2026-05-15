import { describe, expect, it } from "vitest";
import { isInternalDbLink, resolveDbLink, sanitizeDbLink } from "@/utils/sanitizeDbLink.ts";

describe("sanitizeDbLink", () => {
  it("should sanitize internal db link", () => {
    const url = "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR4184766";
    const result = sanitizeDbLink(url);
    expect(result).toBe("/search/entry/sra-run/SRR4184766/");
  });
  it("should handle trailing slash", () => {
    const url = "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR4184766/";
    const result = sanitizeDbLink(url);
    expect(result).toBe("/search/entry/sra-run/SRR4184766/");
  });
  it("should sanitize ddbj resource links", () => {
    const url = "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1";
    const result = sanitizeDbLink(url);
    expect(result).toBe("/search/entry/bioproject/PRJDB1/");
  });
  it("should return external link", () => {
    const url = "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_025407945";
    const result = sanitizeDbLink(url);
    expect(result).toBe(url);
  });
  it("should keep external BioProject links external", () => {
    const url = "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA21211";
    const result = sanitizeDbLink(url);
    expect(result).toBe(url);
  });
});

describe("resolveDbLink", () => {
  it("resolves ddbj staging search entry links as internal router links", () => {
    const url = "https://ddbj-staging.nig.ac.jp/search/entry/sra-run/SRR4184766";
    const result = resolveDbLink(url);
    expect(result).toEqual({ kind: "internal", to: "/entry/sra-run/SRR4184766/" });
  });

  it("resolves relative search entry links as internal router links", () => {
    const result = resolveDbLink("/search/entry/biosample/SAMD00196830/");
    expect(result).toEqual({ kind: "internal", to: "/entry/biosample/SAMD00196830/" });
  });

  it("resolves ddbj resource links as internal router links", () => {
    const url = "https://ddbj.nig.ac.jp/resource/bioproject/PRJDB1";
    const result = resolveDbLink(url);
    expect(result).toEqual({ kind: "internal", to: "/entry/bioproject/PRJDB1/" });
  });

  it("returns external links for non-ddbj hosts", () => {
    const url = "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA21211";
    const result = resolveDbLink(url);
    expect(result).toEqual({ kind: "external", href: url });
    expect(isInternalDbLink(url)).toBe(false);
  });
});
