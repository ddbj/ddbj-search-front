import { describe, expect, it } from "vitest";
import { __test__XrefPanel } from "@/features/searchDetail/panels/XrefPanel.tsx";
import type { Xref } from "@/api/components.ts";

const { parseRefs } = __test__XrefPanel;

describe("parseRefs", () => {
  it("should work", () => {
    const data: Xref[] = [
      {
        identifier: "GCA_000021045",
        type: "assemblies",
        url: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000021045/",
      },
      {
        identifier: "GCA_000021045",
        type: "gold",
        url: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000021045/",
      },
      {
        identifier: "SAMN02604349",
        type: "sra-run",
        url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
      },
      {
        identifier: "SAMN19513674",
        type: "biosample",
        url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN19513674",
      },
      {
        identifier: "SAMN02604349",
        type: "biosample",
        url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
      },
    ];
    const result = parseRefs(data);
    expect(result[0]).toBeTruthy();
    expect(result[0].dbName).toBe("BioSample");
    expect(result[1].dbName).toBe("SRA Run");
    expect(result[2].dbName).toBe("assemblies");
  });
  it("should handle umbrella project", () => {
    const data: Xref[] = [
      {
        identifier: "GCA_000021045",
        type: "assemblies",
        url: "https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000021045/",
      },
      {
        identifier: "SAMN19513674",
        type: "biosample",
        url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN19513674",
      },
      {
        identifier: "PRJNA212117",
        type: "umbrella-bioproject",
        url: "https://ddbj.nig.ac.jp/resource/biosample/SAMN02604349",
      },
    ];
    const result = parseRefs(data);
    expect(result[0]).toBeTruthy();
    expect(result[0].dbName).toBe("Umbrella BioProject");
    expect(result[1].dbName).toBe("BioSample");
  });
});
