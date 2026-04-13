import { Checkbox } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { type FC } from "react";
import type { FileRoutesByFullPath } from "@/routeTree.gen.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";

type Props = {
  labelStr: string;
  value: string;
  isSelected?: boolean;
  setIsSelected?: (value: boolean) => void;
  to?: string;
  search?: BaseSearchParams;
  from?: keyof FileRoutesByFullPath;
};

const checkboxClasses = clsx("group/checkbox flex min-w-0 items-start gap-2.5");
const labelClasses = clsx("min-w-0 text-sm leading-6 text-gray-900 break-words");
const controlClasses = clsx(
  "mt-1 size-4 shrink-0 rounded-sm border border-gray-400 shadow-none transition-colors before:hidden",
  "group-data-[selected=true]/checkbox:border-fire-bush-600",
  "group-data-[selected=true]/checkbox:bg-fire-bush-600",
  "group-data-[indeterminate=true]/checkbox:border-fire-bush-600",
  "group-data-[indeterminate=true]/checkbox:bg-fire-bush-600",
);
const indicatorClasses = clsx("text-white");
const contentClasses = clsx("min-w-0 pt-px");
const linkClasses = clsx(labelClasses, "text-link-primary underline-offset-2 hover:underline");
export const CheckboxText: FC<Props> = ({
  to,
  labelStr,
  value,
  isSelected = false,
  setIsSelected,
  search,
  from = "/",
}) => {
  if (to) {
    return (
      <Checkbox
        className={checkboxClasses}
        isSelected={isSelected}
        onChange={setIsSelected}
        value={value}
      >
        <Checkbox.Control className={controlClasses}>
          <Checkbox.Indicator className={indicatorClasses} />
        </Checkbox.Control>
        <Checkbox.Content className={contentClasses}>
          <Link
            to={to}
            className={linkClasses}
            search={search}
            from={from}
            resetScroll={true}
            onClick={(event) => event.stopPropagation()}
          >
            {labelStr}
          </Link>
        </Checkbox.Content>
      </Checkbox>
    );
  } else {
    return (
      <Checkbox
        className={checkboxClasses}
        isSelected={isSelected}
        onChange={setIsSelected}
        value={value}
      >
        <Checkbox.Control className={controlClasses}>
          <Checkbox.Indicator className={indicatorClasses} />
        </Checkbox.Control>
        <Checkbox.Content className={contentClasses}>
          <span className={labelClasses}>{labelStr}</span>
        </Checkbox.Content>
      </Checkbox>
    );
  }
};
