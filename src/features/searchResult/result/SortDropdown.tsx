import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { type FC, type ReactNode, useMemo, useState } from "react";
import { ArrowDownRightIcon } from "@/features/graphics/ArrowDownRightIcon.tsx";
import { ArrowUpRightIcon } from "@/features/graphics/ArrowUpRightIcon.tsx";
import { StarShineIcon } from "@/features/graphics/StarShineIcon.tsx";
import type { Selection } from "@heroui/react";

type Props = {};

type Item = {
  label: string;
  value: string;
  icon: ReactNode;
};
const items = [
  {
    label: "Relevance",
    value: "relevance",
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
export const SortDropdown: FC<Props> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([items[0].value]));
  const currentItem: Item = useMemo(() => {
    const key = [...selectedKeys][0];
    return (
      items.find((item) => item.value === key) ?? {
        label: "Undefined",
        value: "undefined",
        icon: <></>,
      }
    );
  }, [selectedKeys]);

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
