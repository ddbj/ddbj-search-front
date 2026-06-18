import { clsx } from "clsx";
import { type FC } from "react";
import { dbLabels, type DBType, dbTypeList } from "@/consts/db.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { UpdateSearchFunctions } from "@/views/searchResult/components/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import { CheckboxText } from "@/views/searchResult/components/queryBuilder/primitives/CheckboxText.tsx";

type Props = {
  currentType: DBType;
  linkSearchParams: AnySearchParams | ((targetType: DBType | null) => AnySearchParams);
  moveToEntryRoot: UpdateSearchFunctions["moveToEntryRoot"];
};

const sectionClasses = clsx("flex flex-col gap-2");
const wrapperClasses = clsx("flex flex-col gap-0.5");
const titleClasses = clsx("text-sm font-medium text-gray-700");
const listClasses = clsx("flex flex-col items-start");
const summaryClasses = clsx("cursor-pointer text-sm font-medium text-gray-700");
const contentClasses = clsx("flex flex-col items-start gap-1");

export const OtherTypeSelector: FC<Props> = ({
  currentType,
  linkSearchParams,
  moveToEntryRoot,
}) => {
  return (
    <section className={sectionClasses}>
      <div className={wrapperClasses}>
        <h2 className={titleClasses}>Type</h2>
        <div className={listClasses}>
          <CheckboxText
            labelStr={dbLabels[currentType]}
            value={currentType}
            isSelected={true}
            to={`/entry/${currentType}/`}
            search={resolveLinkSearchParams(linkSearchParams, currentType)}
          />
        </div>
      </div>
      <details className={wrapperClasses}>
        <summary className={summaryClasses}>Other types</summary>
        <div className={contentClasses}>
          {dbTypeList
            .filter((key) => key !== currentType)
            .map((key) => {
              const types = [key, currentType];
              return (
                <CheckboxText
                  key={key}
                  labelStr={dbLabels[key]}
                  value={key}
                  to={`/entry/${key}/`}
                  search={resolveLinkSearchParams(linkSearchParams, key)}
                  setIsSelected={() =>
                    moveToEntryRoot({ ...resolveLinkSearchParams(linkSearchParams, null), types })
                  }
                />
              );
            })}
        </div>
      </details>
    </section>
  );
};

const resolveLinkSearchParams = (
  linkSearchParams: Props["linkSearchParams"],
  targetType: DBType | null,
): AnySearchParams => {
  return typeof linkSearchParams === "function" ? linkSearchParams(targetType) : linkSearchParams;
};
