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

const wrapperClasses = clsx("flex min-w-0 items-start gap-2.5");
const checkboxClasses = clsx("shrink-0");
const labelClasses = clsx("min-w-0 text-sm leading-6 text-gray-900 break-words");
const buttonClasses = clsx(labelClasses, "cursor-pointer text-left");
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
      <div className={wrapperClasses}>
        <Checkbox
          aria-label={labelStr}
          className={checkboxClasses}
          value={value}
          isSelected={isSelected}
          onChange={setIsSelected}
        />
        <Link to={to} className={linkClasses} search={search} from={from} resetScroll={true}>
          {labelStr}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={wrapperClasses}>
        <Checkbox
          aria-label={labelStr}
          className={checkboxClasses}
          value={value}
          isSelected={isSelected}
          onChange={setIsSelected}
        />
        <button
          type="button"
          className={buttonClasses}
          onClick={() => setIsSelected?.(!isSelected)}
        >
          {labelStr}
        </button>
      </div>
    );
  }
};
