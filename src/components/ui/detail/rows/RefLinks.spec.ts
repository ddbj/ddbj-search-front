import { describe, it, expect } from "vitest";
import { __TEST__REF_LINKS__ } from "@/components/ui/detail/rows/RefLinks.tsx";
const { handleRefLink } = __TEST__REF_LINKS__;

describe("handleRefLink", () => {
  it("should handle internal link", () => {
    const url = "https://ddbj.nig.ac.jp/search/entry/biosample/SAMD00040647";
    const { linkText, isExternal } = handleRefLink(url);
    expect(linkText).toBe("/search/entry/biosample/SAMD00040647");
    expect(isExternal).toBe(false);
  });
  it("should handle external link", () => {
    const url = "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=9606";
    const { linkText, isExternal } = handleRefLink(url);
    expect(linkText).toBe(
      "https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=9606"
    );
    expect(isExternal).toBe(true);
  });
  it("should replace `resource/` with `/search/entry/`", () => {
    const url = "https://ddbj.nig.ac.jp/resource/biosample/SAMD00040647";
    const { linkText, isExternal } = handleRefLink(url);
    expect(linkText).toBe("/search/entry/biosample/SAMD00040647");
    expect(isExternal).toBe(false);
  });
});
