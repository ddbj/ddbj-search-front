import { describe, expect, it } from "vitest";
import { baseSearchSchema } from "@/schema/search/base.ts";

describe("baseSearchSchema", () => {
  it("keeps numeric organism values", () => {
    expect(baseSearchSchema.parse({ organism: "562" }).organism).toBe("562");
  });

  it("keeps non-numeric organism values", () => {
    expect(baseSearchSchema.parse({ organism: "abc" }).organism).toBe("abc");
  });
});
