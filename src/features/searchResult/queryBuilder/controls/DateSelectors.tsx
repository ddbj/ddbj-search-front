import { type FC } from "react";
import { searchResultDateLabels } from "@/consts/entryDisplayLabels.ts";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import { DateRangePicker } from "@/features/searchResult/queryBuilder/premitives/DateRangePicker.tsx";

type Props = {
  published: string;
  modified: string;
  changePublished: (v: string) => void;
  changeModified: (v: string) => void;
};

const wrapperClasses = "flex flex-col gap-4";

export const DateSelectors: FC<Props> = ({
  published,
  modified,
  changeModified,
  changePublished,
}) => {
  const { uiValue: uiPublished, setUiValue: setUiPublished } = useDebouncedUiValue(
    published,
    changePublished,
  );
  const { uiValue: uiUpdated, setUiValue: setUiUpdated } = useDebouncedUiValue(
    modified,
    changeModified,
  );

  return (
    <div className={wrapperClasses}>
      <DateRangePicker
        label={searchResultDateLabels.datePublishedFilter}
        value={uiPublished}
        onChange={setUiPublished}
      />
      <DateRangePicker
        label={searchResultDateLabels.dateModifiedFilter}
        value={uiUpdated}
        onChange={setUiUpdated}
      />
    </div>
  );
};
