import { DateRangePicker as _DateRangePicker } from "@heroui/date-picker";
import { type CalendarDate } from "@internationalized/date";
import { type FC } from "react";
import type { DateRange } from "@/state/SearchQueryState.ts";

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

/*
const uiValue = useMemo(() => {
    if (value) {
      const splitted = value.split("_");
      const start = parseDate(splitted[0]);
      const end = parseDate(splitted[1]);
      return { start, end };
    } else {
      return null;
    }
  }, [value]);
  const onChangeUi = useCallback(
    (v: RangeValue<CalendarDate> | null) => {
      if (v?.start && v.end) {
        onChange(`${v.start.toString()}_${v.end.toString()}`);
      } else {
        onChange(null);
      }
    },
    [onChange]
  );
 */
