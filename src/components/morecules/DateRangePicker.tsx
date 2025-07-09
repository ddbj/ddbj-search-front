import { DateRangePicker as HeroDateRangePicker } from "@heroui/date-picker";
import { parseDate } from "@internationalized/date";
import { type ComponentProps, type FC, useEffect, useState } from "react";

type DateRange = ComponentProps<typeof HeroDateRangePicker>["value"];
type Props = {
  label: string;
  value: string | null | undefined;
  onChange: (value: string | null) => void;
};

export const DateRangePicker: FC<Props> = ({ label, value, onChange }) => {
  const [uiValue, setUiValue] = useState<DateRange>(null);
  useEffect(() => {
    if (value) {
      const splitted = value.split("_");
      const start = splitted[0];
      const end = splitted[1];
      setUiValue({
        start: parseDate(start),
        end: parseDate(end),
      });
    } else {
      setUiValue(null);
    }
  }, [value]);
  useEffect(() => {
    if (uiValue) {
      const start = uiValue.start.toString();
      const end = uiValue.start.toString();
      onChange(`${start}_${end}`);
    } else {
      onChange(null);
    }
  }, [uiValue]);
  //todo: add clear button
  return (
    <HeroDateRangePicker label={label} value={uiValue} onChange={setUiValue} aria-label={label} />
  );
};
