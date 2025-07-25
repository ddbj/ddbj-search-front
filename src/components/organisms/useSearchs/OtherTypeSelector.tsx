import { useNavigate, useSearch } from "@tanstack/react-router";
import { type FC, useMemo } from "react";
import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbLabels, type DBType, dbTypeList, dbTypes } from "@/consts.ts";
import { isGeneralSearchKey } from "@/schema/search.ts";

type Props = {
  currentType: DBType;
};

export const OtherTypeSelector: FC<Props> = ({ currentType }) => {
  const search = useSearch({ strict: false });
  const generalSearchParams = useMemo(() => {
    return Object.fromEntries(
      Object.entries(search).filter((key, _value) => isGeneralSearchKey(key))
    );
  }, [search]);
  const navigate = useNavigate();

  const onSetOtherType = (type: DBType) => {
    const types = [type, currentType];
    const newSearch = {
      ...generalSearchParams,
      types,
    };
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
                  search={generalSearchParams}
                  setIsSelected={() => onSetOtherType(key)}
                />
              );
            })}
        </div>
      </details>
    </div>
  );
};
