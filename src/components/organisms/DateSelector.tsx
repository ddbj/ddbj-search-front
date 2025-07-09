import { DateRangePicker } from "@/components/morecules/DateRangePicker.tsx";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";
import type { FC } from "react";

type Props = {};

const wrapperClasses = "flex flex-col gap-4";

export const DateSelector: FC<Props> = () => {
  const state = useSearchQueryState();
  const { updateDateUpdated, updateDatePublished } = useSearchQueryMutators();
  const onChangeDatePublished = (value: string | null) => {
    updateDatePublished(value);
  };
  const onChangeDateUpdated = (value: string | null) => {
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
