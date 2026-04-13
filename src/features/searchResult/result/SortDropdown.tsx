import { type FC, type ReactNode, useEffect, useMemo, useState } from "react";
import { ArrowDownRightIcon } from "@/features/graphics/ArrowDownRightIcon.tsx";
import { ArrowUpRightIcon } from "@/features/graphics/ArrowUpRightIcon.tsx";
import { StarShineIcon } from "@/features/graphics/StarShineIcon.tsx";
import type { SortKey } from "@/api/consts.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";

type Props = {
  changeSortFunc: UpdateSearchFunctions["changeSort"];
  currentSort: SortKey | null | undefined;
};

const SELECT_DEFAULT = "relevance";
type DropDownKey = typeof SELECT_DEFAULT | SortKey;
type Item = {
  label: string;
  value: DropDownKey;
  icon: ReactNode;
};
const items: Item[] = [
  {
    label: "Relevance",
    value: SELECT_DEFAULT,
    icon: <StarShineIcon className={"w-3"} />,
  },
  {
    label: "Updated Date",
    value: "dateModified:desc",
    icon: <ArrowDownRightIcon className={"w-3"} />,
  },
  {
    label: "Updated Date",
    value: "dateModified:asc",
    icon: <ArrowUpRightIcon className={"w-3"} />,
  },
  {
    label: "Published Date",
    value: "datePublished:desc",
    icon: <ArrowDownRightIcon className={"w-3"} />,
  },
  {
    label: "Published Date",
    value: "datePublished:asc",
    icon: <ArrowUpRightIcon className={"w-3"} />,
  },
];
export const SortDropdown: FC<Props> = ({ changeSortFunc, currentSort }) => {
  const [selectedKey, setSelectedKey] = useState<DropDownKey>(currentSort ?? SELECT_DEFAULT);
  const currentItem: Item = useMemo(() => {
    return (
      items.find((item) => item.value === selectedKey) ?? {
        label: "Undefined",
        value: SELECT_DEFAULT,
        icon: <></>,
      }
    );
  }, [selectedKey]);
  useEffect(() => {
    setSelectedKey(currentSort ?? SELECT_DEFAULT);
  }, [currentSort]);

  useEffect(() => {
    changeSortFunc(selectedKey === SELECT_DEFAULT ? null : selectedKey);
  }, [selectedKey, changeSortFunc]);

  return (
    <div className={"flex items-center gap-2"}>
      <span>Sort by:</span>
      <label className="flex items-center gap-2">
        <span className="flex items-center gap-1 text-sm">
          {currentItem.icon}
          {currentItem.label}
        </span>
        <select
          className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm"
          value={selectedKey}
          onChange={(event) => setSelectedKey(event.currentTarget.value as DropDownKey)}
        >
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
