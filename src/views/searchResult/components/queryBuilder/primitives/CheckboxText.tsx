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
const labelClasses = clsx("min-w-0 text-[15px] leading-6 break-words text-gray-900");
const linkWrapperClasses = clsx("min-w-0 break-words");
const controlClasses = clsx(
  "border-border mt-0.5 size-5 shrink-0 rounded-sm border shadow-none transition-colors",
  "before:bg-bg-primary before:rounded-none",
);
const indicatorClasses = clsx("text-white");
const contentClasses = clsx("min-w-0");
const linkClasses = clsx("text-link-primary");
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
          <div className={linkWrapperClasses}>
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
          </div>
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
