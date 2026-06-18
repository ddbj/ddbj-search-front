import { describe, expect, it } from "vitest";
import { resolveDbLink } from "@/lib/sanitizing/sanitizeDbLink.ts";

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
  });
});
