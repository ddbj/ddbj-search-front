import {
  DateField,
  DateRangePicker as HeroDateRangePicker,
  Label,
  RangeCalendar,
} from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { type FC } from "react";
import { CalendarIcon } from "@/features/graphics/CalendarIcon.tsx";
import clsx from "clsx";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

type SerializableDateRange = {
  start?: {
    toString: () => string;
  };
  end?: {
    toString: () => string;
  };
} | null;

const pickerClasses = clsx("w-full gap-0.5");
const fieldGroupClasses = clsx(
  "h-10 w-full rounded border border-gray-200 bg-white",
  "hover:border-gray-300",
);
const popoverClasses = clsx("rounded border border-gray-200 bg-white p-3 shadow-lg");

export const DateRangePicker: FC<Props> = ({ label, value, onChange }) => {
  return (
    <HeroDateRangePicker
      aria-label={label}
      className={pickerClasses}
      // HeroUI resolves a newer @internationalized/date type internally, so the parsed value is passed structurally here.
      value={stringToDateRange(value) as never}
      onChange={(nextValue) => onChange(dateRangeToString(nextValue))}
    >
      <Label className="text-sm font-medium text-gray-700">{label}</Label>
      <DateField.Group className={fieldGroupClasses} fullWidth variant="secondary">
        <DateField.InputContainer>
          <DateField.Input slot="start">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
          <HeroDateRangePicker.RangeSeparator className="px-2 text-gray-400" />
          <DateField.Input slot="end">
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.InputContainer>
        <DateField.Suffix>
          <HeroDateRangePicker.Trigger aria-label={`Open ${label} calendar`}>
            <HeroDateRangePicker.TriggerIndicator className="text-gray-500">
              <CalendarIcon className="h-4 w-4 fill-current" />
            </HeroDateRangePicker.TriggerIndicator>
          </HeroDateRangePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <HeroDateRangePicker.Popover className={popoverClasses}>
        <RangeCalendar aria-label={`${label} calendar`}>
          <RangeCalendar.Header>
            <RangeCalendar.YearPickerTrigger>
              <RangeCalendar.YearPickerTriggerHeading />
              <RangeCalendar.YearPickerTriggerIndicator />
            </RangeCalendar.YearPickerTrigger>
            <RangeCalendar.NavButton slot="previous" />
            <RangeCalendar.NavButton slot="next" />
          </RangeCalendar.Header>
          <RangeCalendar.Grid>
            <RangeCalendar.GridHeader>
              {(day) => <RangeCalendar.HeaderCell>{day}</RangeCalendar.HeaderCell>}
            </RangeCalendar.GridHeader>
            <RangeCalendar.GridBody>
              {(date) => <RangeCalendar.Cell date={date} />}
            </RangeCalendar.GridBody>
          </RangeCalendar.Grid>
        </RangeCalendar>
      </HeroDateRangePicker.Popover>
    </HeroDateRangePicker>
  );
};

const dateRangeToString = (value: SerializableDateRange): string => {
  if (!value?.start || !value?.end) {
    return "";
  }

  return `${value.start.toString()},${value.end.toString()}`;
};

const stringToDateRange = (value: string) => {
  const [start = "", end = ""] = value.split(",");

  if (!start || !end) {
    return null;
  }

  return {
    start: parseDate(start),
    end: parseDate(end),
  };
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper keeps string conversion coverage next to the component.
export const __TEST__DATE_RANGE_PICKER = {
  dateRangeToString,
  stringToDateRange,
};
