import { type FC } from "react";
import { dbLabels, type DBType, isDBType } from "@/consts/db.ts";
import { useDebouncedUiValue } from "@/features/searchResult/hooks/useDebouncedUiValue.ts";
import { CheckboxText } from "@/features/searchResult/ui/CheckboxText.tsx";
import type { BaseSearchParams } from "@/schema/search/base.ts";

type Props = {
  value: DBType[];
  linkSearchParams: BaseSearchParams;
  update: (types: DBType[]) => void;
};

export const TypeSelector: FC<Props> = ({ linkSearchParams, value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);
  const toggleDBTypes = (key: DBType, value: boolean) => {
    const next = value ? [...uiValue, key] : uiValue.filter((v) => v !== key);
    setUiValue([...new Set(next)]);
  };
  return (
    <div>
      Types
      <div className={"flex flex-col gap-1"}>
        {Object.entries(dbLabels).map(([name, label]) => {
          const isSelected = uiValue?.includes(name as DBType);
          return (
            <CheckboxText
              key={name}
              labelStr={label + " (99999)"}
              value={name}
              to={`/entry/${name}`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                if (!isDBType(name)) return;
                toggleDBTypes(name, v);
              }}
              search={linkSearchParams}
            />
          );
        })}
      </div>
    </div>
  );
};
