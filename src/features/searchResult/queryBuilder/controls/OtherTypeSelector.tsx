import { type FC } from "react";
import { dbLabels, type DBType, dbTypeList } from "@/consts/db.ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";
import { clsx } from "clsx";

type Props = {
  currentType: DBType;
  linkSearchParams: BaseSearchParams;
  moveToEntryRoot: UpdateSearchFunctions["moveToEntryRoot"];
};

const sectionClasses = clsx("flex flex-col gap-2");
const titleClasses = clsx("text-sm leading-5 font-medium text-gray-700");
const listClasses = clsx("flex flex-col gap-2");
const detailsClasses = clsx("rounded-lg border border-gray-200 bg-white px-3 py-2");
const summaryClasses = clsx("cursor-pointer text-sm leading-5 font-medium text-gray-700");

export const OtherTypeSelector: FC<Props> = ({
  currentType,
  linkSearchParams,
  moveToEntryRoot,
}) => {
  return (
    <section className={sectionClasses}>
      <h2 className={titleClasses}>Type</h2>
      <div className={listClasses}>
        <CheckboxText
          labelStr={dbLabels[currentType]}
          value={currentType}
          isSelected={true}
          to={`/entry/${currentType}`}
          search={linkSearchParams}
        />
      </div>
      <details className={detailsClasses}>
        <summary className={summaryClasses}>Other types</summary>
        <div className={"mt-2 flex flex-col gap-2"}>
          {dbTypeList
            .filter((key) => key !== currentType)
            .map((key) => {
              const types = [key, currentType];
              return (
                <CheckboxText
                  key={key}
                  labelStr={dbLabels[key]}
                  value={key}
                  to={`/entry/${key}`}
                  search={linkSearchParams}
                  setIsSelected={() => moveToEntryRoot({ ...linkSearchParams, types })}
                />
              );
            })}
        </div>
      </details>
    </section>
  );
};
