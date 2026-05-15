import { describe, expect, it } from "vitest";
import { getNullableString, getUnknownRecord } from "@/utils/unknown.ts";

describe("getUnknownRecord", () => {
  it("returns records for plain objects", () => {
    expect(getUnknownRecord({ key: "value" })).toEqual({ key: "value" });
  });

  it.each([null, undefined, "value", 1, true, ["value"]])(
    "returns null for non-record values: %s",
    (value) => {
      expect(getUnknownRecord(value)).toBeNull();
    },
  );
});

describe("getNullableString", () => {
  it("returns string values", () => {
    expect(getNullableString("value")).toBe("value");
  });

  it.each([null, undefined, 1, true, {}, ["value"]])("returns null for non-string values: %s", (value) => {
    expect(getNullableString(value)).toBeNull();
  });
});
