import { DateRangePicker } from "@/components/morecules/DateRangePicker.tsx";
import {
  type DateRange,
  useSearchQueryMutators,
  useSearchQueryState,
} from "@/state/SearchQueryState.ts";
import type { FC } from "react";

type Props = {};

const wrapperClasses = "flex flex-col gap-4";

export const DateSelector: FC<Props> = () => {
  const state = useSearchQueryState();
  const { updateDateUpdated, updateDatePublished } = useSearchQueryMutators();
  const onChangeDatePublished = (value: DateRange | null) => {
    updateDatePublished(value);
  };
  const onChangeDateUpdated = (value: DateRange | null) => {
    updateDateUpdated(value);
  };
  return (
    <div className={wrapperClasses}>
      <DateRangePicker
        label={"Published Date"}
        value={state.datePublished}
        onChange={onChangeDatePublished}
      />
      <DateRangePicker
        label={"Updated Date"}
        value={state.dateUpdated}
        onChange={onChangeDateUpdated}
      />
    </div>
  );
};
