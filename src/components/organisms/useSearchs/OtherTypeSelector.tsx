import { useNavigate, useSearch } from "@tanstack/react-router";
import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbLabels, type DBType, dbTypeList, dbTypes } from "@/consts.ts";
import type { FC } from "react";

type Props = {
  currentType: DBType;
};

export const OtherTypeSelector: FC<Props> = ({ currentType }) => {
  const search = useSearch({ strict: false });
  const navigate = useNavigate();

  const onSetOtherType = (type: DBType) => {
    const types = [type, currentType];
    const newSearch = { ...search, types };
    navigate({ from: "/", to: "/all", search: newSearch });
  };

  return (
    <div>
      <div>Type</div>
      <div>
        <CheckboxText
          labelStr={dbLabels[currentType]}
          value={currentType}
          isSelected={true}
          to={`/${currentType}`}
          search={search}
        />
      </div>
      <details>
        <summary>Other types</summary>
        <div className={"flex flex-col"}>
          {dbTypeList
            .filter((key) => key !== currentType)
            .map((key) => {
              return (
                <CheckboxText
                  key={key}
                  labelStr={dbLabels[key]}
                  value={key}
                  to={`/${key}`}
                  search={search}
                  setIsSelected={() => onSetOtherType(key)}
                />
              );
            })}
        </div>
      </details>
    </div>
  );
};
