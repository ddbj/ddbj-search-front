import { type FC } from "react";
type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};
export const DateRangePicker: FC<Props> = ({ label, value, onChange }) => {
  const { end, start } = stringToDateRange(value ?? "");

  const updateRange = (nextStart: string, nextEnd: string) => {
    if (nextStart && nextEnd) {
      onChange(`${nextStart},${nextEnd}`);
      return;
    }

    onChange("");
  };

  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <input
          aria-label={`${label} start`}
          className="rounded-md border border-stone-300 px-3 py-2"
          type="date"
          value={start}
          onChange={(event) => updateRange(event.currentTarget.value, end)}
        />
        <span className="text-sm text-stone-500">to</span>
        <input
          aria-label={`${label} end`}
          className="rounded-md border border-stone-300 px-3 py-2"
          type="date"
          value={end}
          onChange={(event) => updateRange(start, event.currentTarget.value)}
        />
      </div>
    </label>
  );
};

const stringToDateRange = (str: string) => {
  const [start, end] = str.split(",");
  return {
    end: end ?? "",
    start: start ?? "",
  };
};
