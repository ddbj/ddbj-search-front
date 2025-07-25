import { useNavigate, useSearch } from "@tanstack/react-router";
import { type FC, useMemo } from "react";
import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbLabels, type DBType } from "@/consts.ts";
import type { SearchBase } from "@/schema/search.ts";

type Props = {};

export const TypeSelector: FC<Props> = () => {
  const searchParams = useSearch({ strict: false });
  const navigate = useNavigate();
  const onChangeSelection = (name: DBType, value: boolean) => {
    const replace = true;
    const tempTypes = searchParams.types ?? [];
    const { types: _oldTypes, ...otherSearchTypes } = searchParams;
    const types = value ? [...tempTypes, name] : tempTypes.filter((v) => v !== name);
    const search: SearchBase = {
      ...otherSearchTypes,
      ...(types.length ? { types } : {}),
    };
    navigate({ from: "/", search, replace });
  };
  const linkSearchParams = useMemo(() => {
    const { types, ...rest } = searchParams;
    return rest;
  }, [searchParams]);
  return (
    <div>
      Types
      <div className={"flex flex-col gap-1"}>
        {Object.entries(dbLabels).map(([name, label]) => {
          const isSelected = searchParams.types?.includes(name as DBType);
          return (
            <CheckboxText
              key={name}
              labelStr={label + " (99999)"}
              value={name}
              to={`/${name}`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                onChangeSelection(name as DBType, v);
              }}
              search={linkSearchParams}
            />
          );
        })}
      </div>
    </div>
  );
};
