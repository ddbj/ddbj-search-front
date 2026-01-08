import { expect } from "storybook/test";
import { describe, it } from "vitest";
import { formatToDateStr } from "@/utils/dateTime.ts";

describe("formatToDateStr", () => {
  it("", () => {
    const str = "2024-11-18T11:15:39Z";
    const result = formatToDateStr(str);
    expect(result).toBe("2024-11-18");
  });
  it("", () => {
    const str = "2024-02-18";
    const result = formatToDateStr(str);
    expect(result).toBe("2024-02-18");
  });

  it("", () => {
    const str = "fewafree";
    const result = formatToDateStr(str);
    expect(result).toBe("Invalid Date");
  });
});
