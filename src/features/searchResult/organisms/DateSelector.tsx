import { type FC } from "react";
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
  return (
    <div className={wrapperClasses}>
      <DateRangePicker label={"Published Date"} value={published} onChange={changePublished} />
      <DateRangePicker label={"Updated Date"} value={updated} onChange={changeUpdated} />
    </div>
  );
};
