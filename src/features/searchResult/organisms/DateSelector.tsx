import { type FC } from "react";
import { useDebouncedUiValue } from "@/features/searchResult/hooks/useDebouncedUiValue.ts";
import { DateRangePicker } from "@/features/searchResult/ui/DateRangePicker.tsx";
import { type DateRange } from "@/utils/date.ts";

type Props = {
  published: DateRange | null;
  updated: DateRange | null;
  changePublished: (v: DateRange | null) => void;
  changeUpdated: (v: DateRange | null) => void;
};

const wrapperClasses = "flex flex-col gap-4";

export const DateSelector: FC<Props> = ({ published, updated, changeUpdated, changePublished }) => {
  const { uiValue: uiPublished, setUiValue: setUiPublished } = useDebouncedUiValue(
    published,
    changePublished
  );
  const { uiValue: uiUpdated, setUiValue: setUiUpdated } = useDebouncedUiValue(
    updated,
    changeUpdated
  );

  return (
    <div className={wrapperClasses}>
      <DateRangePicker label={"Published Date"} value={uiPublished} onChange={setUiPublished} />
      <DateRangePicker label={"Updated Date"} value={uiUpdated} onChange={setUiUpdated} />
    </div>
  );
};
