import { type CalendarDate, parseDate } from "@internationalized/date";
import type { DateRangeSchemaType } from "@/schema/search.ts";
import type { RangeValue } from "@react-types/shared";

export type DateRange = RangeValue<CalendarDate>;
export const dateRangeDataToString = (range: DateRange): DateRangeSchemaType => {
  const start = range.start.toString();
  const end = range.end.toString();
  return { start, end };
};
export const dateRangeStringToData = (value: DateRangeSchemaType): DateRange => {
  const start = parseDate(value.start);
  const end = parseDate(value.end);
  return { start, end };
};
export const compileDateRangeString = (start: string, end: string): DateRangeSchemaType => {
  return { start, end };
};

/**
 * @deprecated
 * @param start
 * @param end
 */
export const stringToDateRange2 = (start: string, end: string): DateRange => {
  const _start = parseDate(start);
  const _end = parseDate(end);
  return { start: _start, end: _end };
};
