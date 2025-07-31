import { type FC, useMemo } from "react";
import { dbLabels, type DBType, isDBType } from "@/consts/db.ts";
import { CheckboxText } from "@/features/searchResult/ui/CheckboxText.tsx";
import type { BaseSearchParams } from "@/schema/search.ts";

type Props = {
  types: DBType[];
  linkSearchParams: BaseSearchParams;
  mergeDBTypes: (type: DBType, value: boolean) => void;
};

export const TypeSelector: FC<Props> = ({ linkSearchParams, types, mergeDBTypes }) => {
  return (
    <div>
      Types
      <div className={"flex flex-col gap-1"}>
        {Object.entries(dbLabels).map(([name, label]) => {
          const isSelected = types?.includes(name as DBType);
          return (
            <CheckboxText
              key={name}
              labelStr={label + " (99999)"}
              value={name}
              to={`/entry/${name}`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                if (!isDBType(name)) return;
                mergeDBTypes(name, v);
              }}
              search={linkSearchParams}
            />
          );
        })}
      </div>
    </div>
  );
};
