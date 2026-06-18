import { describe, expect, it } from "vitest";
import { __TEST__DATE_RANGE_PICKER } from "@/views/searchResult/components/queryBuilder/primitives/DateRangePicker.tsx";

const { dateRangeToString, stringToDateRange } = __TEST__DATE_RANGE_PICKER;

describe("DateRangePicker conversions", () => {
  it("converts a range string into a date range value", () => {
    const result = stringToDateRange("2024-01-01,2024-01-31");

    expect(result?.start.toString()).toBe("2024-01-01");
    expect(result?.end.toString()).toBe("2024-01-31");
  });

  it("returns null when the input is empty", () => {
    expect(stringToDateRange("")).toBeNull();
  });

  it("converts a date range value into a range string", () => {
    const result = stringToDateRange("2024-02-01,2024-02-29");

    expect(dateRangeToString(result)).toBe("2024-02-01,2024-02-29");
  });

  it("returns an empty string when the range value is null", () => {
    expect(dateRangeToString(null)).toBe("");
  });
});
