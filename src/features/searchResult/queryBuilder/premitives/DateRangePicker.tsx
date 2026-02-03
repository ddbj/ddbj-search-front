import { DateRangePicker as _DateRangePicker } from "@heroui/date-picker";
import { type CalendarDate, parseDate } from "@internationalized/date";
import { type FC } from "react";
import { CalendarIcon } from "@/features/graphics/CalendarIcon.tsx";
import { HomeIcon } from "@/features/graphics/HomeIcon.tsx";
import type { RangeValue } from "@react-types/shared";

const TypedDateRangePicker = _DateRangePicker<CalendarDate>;
type DateRange = RangeValue<CalendarDate>;
type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};
export const DateRangePicker: FC<Props> = ({ label, value, onChange }) => {
  //todo: add clear button
  return (
    <TypedDateRangePicker
      label={label}
      value={stringToDateRange(value ?? "")}
      onChange={(e) => onChange(dataRangeToString(e))}
      aria-label={label}
      selectorIcon={
        <span>
          <CalendarIcon className={"w-4 fill-text-primary"} />
        </span>
      }
    />
  );
};

const dataRangeToString = (value: DateRange | null): string => {
  if (value?.start && value?.end) {
    const start = value.start.toString();
    const end = value.end.toString();
    return `${start},${end}`;
  }
  return "";
};
const stringToDateRange = (str: string): DateRange | null => {
  const [start, end] = str.split(",");
  if (start && end) {
    return {
      start: parseDate(start),
      end: parseDate(end),
    };
  } else {
    return null;
  }
};
