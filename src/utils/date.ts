import { type CalendarDate, parseDate } from "@internationalized/date";
import type { RangeValue } from "@react-types/shared";

export type DateRange = RangeValue<CalendarDate>;
export const dateRangeToString = (range: DateRange | null): string | null => {
  const str = dateRangeToString2(range);
  if (!str) return null;
  return str.start + "_" + str.end;
};
export const dateRangeToString2 = (
  range: DateRange | null
): { start: string; end: string } | null => {
  if (!range) return null;
  const start = range.start.toString();
  const end = range.end.toString();
  return { start, end };
};

export const stringToDateRange = (str: string | null): DateRange | null => {
  if (!str) return null;
  const splitted = str.split("_");
  if (splitted.length !== 2) throw new Error("invalid date range string");
  return stringToDateRange2(splitted[0], splitted[1]);
};

export const stringToDateRange2 = (start: string, end: string): DateRange | null => {
  const _start = parseDate(start);
  const _end = parseDate(end);
  return { start: _start, end: _end };
};
