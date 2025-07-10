import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbSet } from "@/consts.ts";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";
import type { FC } from "react";

type Props = {};

export const TypeSelector: FC<Props> = () => {
  const { toggleType } = useSearchQueryMutators();
  const types = useSearchQueryState().types ?? [];
  return (
    <div>
      Types
      <div className={"flex flex-col gap-1"}>
        {dbSet.map(([value, label]) => {
          const isSelected = !!types.find((t) => t === value);
          return (
            <CheckboxText
              key={value}
              labelStr={label}
              value={value}
              link={`/${value}`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                toggleType(value, v);
              }}
              // onValueChange={}
            />
          );
        })}
      </div>
    </div>
  );
};
