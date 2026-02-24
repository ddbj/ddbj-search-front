import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { type FC, type ReactNode, useEffect, useMemo, useState } from "react";
import { ArrowDownRightIcon } from "@/features/graphics/ArrowDownRightIcon.tsx";
import { ArrowUpRightIcon } from "@/features/graphics/ArrowUpRightIcon.tsx";
import { StarShineIcon } from "@/features/graphics/StarShineIcon.tsx";
import type { SortKey } from "@/api/consts.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { Selection } from "@heroui/react";

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
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([currentSort ?? SELECT_DEFAULT])
  );
  const selectedKey: DropDownKey = useMemo(() => {
    return [...selectedKeys][0] as DropDownKey;
  }, [selectedKeys]);
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
    changeSortFunc(selectedKey === SELECT_DEFAULT ? null : selectedKey);
  }, [selectedKey, changeSortFunc]);

  return (
    <div className={"flex items-center gap-2"}>
      <span>Sort by:</span>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="flat"
            startContent={currentItem.icon}
            className={"h-9 w-40 justify-start px-3"}
          >
            {currentItem.label}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          onSelectionChange={setSelectedKeys}
          selectedKeys={selectedKeys}
          variant={"flat"}
          selectionMode={"single"}
          items={items}
        >
          {(item) => {
            return (
              <DropdownItem key={item.value} startContent={item.icon}>
                {item.label}
              </DropdownItem>
            );
          }}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
