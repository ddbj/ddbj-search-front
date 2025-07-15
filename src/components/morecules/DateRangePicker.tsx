import { DateRangePicker as _DateRangePicker } from "@heroui/date-picker";
import { type CalendarDate } from "@internationalized/date";
import { type FC } from "react";
import type { DateRange } from "@/utils/date.ts";

const TypedDateRangePicker = _DateRangePicker<CalendarDate>;
type Props = {
  label: string;
  value: DateRange | null;
  onChange: (value: DateRange | null) => void;
};
export const DateRangePicker: FC<Props> = ({ label, value, onChange }) => {
  //todo: add clear button
  return (
    <TypedDateRangePicker label={label} value={value} onChange={onChange} aria-label={label} />
  );
};
