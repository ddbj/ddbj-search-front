import { describe, expect, it } from "vitest";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";

describe("reorderXrefs", () => {
  it("should reorder xrefs with dbList", () => {
    const original = {
      "sra-sample": 1,
      "insdc-sample": 1,
      bioproject: 1,
      gold: 4,
      "sra-run": 1,
    };
    const result = reorderXrefs(original);
    expect(result).toEqual([
      ["bioproject", 1],
      ["sra-run", 1],
      ["sra-sample", 1],
      ["gold", 4],
      ["insdc-sample", 1],
    ]);
  });

  it("should handle umbrella project", () => {
    const original = {
      "sra-sample": 1,
      "insdc-sample": 1,
      bioproject: 1,
      gold: 4,
      "umbrella-bioproject": 1,
    };
    const result = reorderXrefs(original);
    expect(result).toEqual([
      ["umbrella-bioproject", 1],
      ["bioproject", 1],
      ["sra-sample", 1],
      ["gold", 4],
      ["insdc-sample", 1],
    ]);
  });

  it("should handle array arg", () => {
    const original: [string, number][] = [
      ["bioproject", 1],
      ["insdc-sample", 1],
      ["gold", 4],
      ["sra-sample", 1],
      ["umbrella-bioproject", 1],
    ];
    const result = reorderXrefs(original);
    expect(result).toEqual([
      ["umbrella-bioproject", 1],
      ["bioproject", 1],
      ["sra-sample", 1],
      ["gold", 4],
      ["insdc-sample", 1],
    ]);
  });
});
