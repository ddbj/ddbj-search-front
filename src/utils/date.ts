import { type CalendarDate, parseDate } from "@internationalized/date";
import type { SearchDateRange } from "@/schema/search.ts";
import type { RangeValue } from "@react-types/shared";

export type DateRange = RangeValue<CalendarDate>;
export const dateRangeDataToString = (range: DateRange): SearchDateRange => {
  const start = range.start.toString();
  const end = range.end.toString();
  return { start, end };
};
export const dateRangeStringToData = (value: SearchDateRange): DateRange => {
  const start = parseDate(value.start);
  const end = parseDate(value.end);
  return { start, end };
};
export const compileDateRangeString = (start: string, end: string): SearchDateRange => {
  return { start, end };
};
