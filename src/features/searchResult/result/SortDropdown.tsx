import { ListBox, Select } from "@heroui/react";
import clsx from "clsx";
import { type FC, type Key, type ReactNode, useEffect, useMemo, useState } from "react";
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
  caption?: string;
  value: DropDownKey;
  icon: ReactNode;
};
const items: Item[] = [
  {
    label: "Relevance",
    value: SELECT_DEFAULT,
    icon: <StarShineIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "Updated Date",
    caption: "Newest first",
    value: "dateModified:desc",
    icon: <ArrowDownRightIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "Updated Date",
    caption: "Oldest first",
    value: "dateModified:asc",
    icon: <ArrowUpRightIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "Published Date",
    caption: "Newest first",
    value: "datePublished:desc",
    icon: <ArrowDownRightIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "Published Date",
    caption: "Oldest first",
    value: "datePublished:asc",
    icon: <ArrowUpRightIcon className="h-3.5 w-3.5" />,
  },
];

const triggerClasses = clsx(
  "flex min-h-12 min-w-64 items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-none",
  "focus:outline-fire-bush-600 focus:outline-2 focus:-outline-offset-2",
);

const iconWrapperClasses = clsx(
  "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600",
);

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

  const onChange = (key: Key | null) => {
    const nextKey = (key ?? SELECT_DEFAULT) as DropDownKey;
    setSelectedKey(nextKey);
    changeSortFunc(nextKey === SELECT_DEFAULT ? null : nextKey);
  };

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <span className="text-sm font-medium text-gray-600">Sort by:</span>
      <Select
        aria-label="Sort search results"
        value={selectedKey}
        variant="secondary"
        onChange={onChange}
      >
        <Select.Trigger className={triggerClasses} data-slot="trigger">
          <div className="flex min-w-0 flex-1 items-center gap-3 text-left">
            <span className={iconWrapperClasses}>{currentItem.icon}</span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium text-gray-700">
                {currentItem.label}
              </span>
              {currentItem.caption ? (
                <span className="truncate text-xs text-gray-500">{currentItem.caption}</span>
              ) : null}
            </span>
          </div>
          <Select.Indicator className="text-gray-400" />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {items.map((item) => (
              <ListBox.Item
                key={item.value}
                id={item.value}
                data-key={item.value}
                textValue={[item.label, item.caption].filter(Boolean).join(" ")}
              >
                <div className="flex items-center gap-3">
                  <span className={iconWrapperClasses}>{item.icon}</span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium text-gray-700">{item.label}</span>
                    {item.caption ? (
                      <span className="truncate text-xs text-gray-500">{item.caption}</span>
                    ) : null}
                  </span>
                </div>
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};
