import { useNavigate, useSearch } from "@tanstack/react-router";
import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbLabels, type DBType } from "@/consts.ts";
import { routeTree } from "@/routeTree.gen.ts";
import type { GlobalSearchSchemaType } from "@/schema/search.ts";
import type { FC } from "react";

type Props = {};

export const TypeSelector: FC<Props> = () => {
  const searchParams = useSearch({ strict: false });
  const { types } = searchParams;
  const navigate = useNavigate();
  const onChangeSelection = (name: DBType, value: boolean) => {
    const from = routeTree.fullPath;
    const replace = true;
    const tempTypes = [...(types ?? [])];
    if (value) {
      tempTypes.push(name);
    } else {
      const index = tempTypes.indexOf(name);
      tempTypes.splice(index, 1);
    }
    const search: GlobalSearchSchemaType = { ...searchParams, types: tempTypes };
    navigate({ from, search, replace });
  };
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
              link={`/${name}`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                onChangeSelection(name as DBType, v);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
