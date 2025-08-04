import { type FC } from "react";
import { useDebouncedUiValue } from "@/features/searchResult/hooks/useDebouncedUiValue.ts";
import { DateRangePicker } from "@/features/searchResult/ui/DateRangePicker.tsx";

type Props = {
  published: string;
  updated: string;
  changePublished: (v: string) => void;
  changeUpdated: (v: string) => void;
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
