import { type FC } from "react";
import { dbLabels, type DBType, dbTypeList } from "@/consts/db.ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";

type Props = {
  currentType: DBType;
  linkSearchParams: BaseSearchParams;
  moveToEntryRoot: UpdateSearchFunctions["moveToEntryRoot"];
};

export const OtherTypeSelector: FC<Props> = ({
  currentType,
  linkSearchParams,
  moveToEntryRoot,
}) => {
  return (
    <div>
      <div>Type</div>
      <div>
        <CheckboxText
          labelStr={dbLabels[currentType]}
          value={currentType}
          isSelected={true}
          to={`/entry/${currentType}`}
          search={linkSearchParams}
        />
      </div>
      <details>
        <summary>Other types</summary>
        <div className={"flex flex-col"}>
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
    </div>
  );
};
