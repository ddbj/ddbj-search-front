import { Checkbox } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { type FC } from "react";
import type { FileRoutesByFullPath } from "@/routeTree.gen.ts";
import type { GeneralSearchSchemaType } from "@/schema/search.ts";

type Props = {
  labelStr: string;
  value: string;
  isSelected?: boolean;
  setIsSelected?: (value: boolean) => void;
  to?: string;
  search?: GeneralSearchSchemaType;
  from?: keyof FileRoutesByFullPath;
};

const wrapperClasses = clsx("flex overflow-hidden");
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
      <div className={wrapperClasses}>
        <Checkbox
          radius={"sm"}
          disableAnimation
          value={value}
          isSelected={isSelected}
          onValueChange={setIsSelected}
          classNames={{ wrapper: "after:bg-bg-primary" }}
        ></Checkbox>
        <Link to={to} className={linkClasses} search={search} from={from}>
          {labelStr}
        </Link>
      </div>
    );
  } else {
    return (
      <Checkbox
        radius={"sm"}
        disableAnimation
        value={value}
        isSelected={isSelected}
        onValueChange={setIsSelected}
      >
        {labelStr}
      </Checkbox>
    );
  }
};
