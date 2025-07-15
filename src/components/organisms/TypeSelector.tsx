import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbLabels, type DBType } from "@/consts.ts";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";
import type { FC } from "react";

type Props = {};

export const TypeSelector: FC<Props> = () => {
  const { toggleType } = useSearchQueryMutators();
  const types = useSearchQueryState().types;
  return (
    <div>
      Types
      <div className={"flex flex-col gap-1"}>
        {Object.entries(dbLabels).map(([name, label]) => {
          const isSelected = types[name as DBType];
          return (
            <CheckboxText
              key={name}
              labelStr={label}
              value={name}
              link={`/${name}`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                toggleType(name as DBType, v);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
