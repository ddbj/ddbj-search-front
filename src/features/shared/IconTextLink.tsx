import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { ComponentType, FC, SVGProps } from "react";

type Props = {
  label: string;
  to: string;
  Icon: ComponentType<SVGProps<SVGSetElement>>;
};

const linkClasses = clsx(
  "block w-fit fill-link-primary text-link-primary hover:fill-link-primary-hover hover:text-link-primary-hover"
);
export const IconTextLink: FC<Props> = ({ Icon, to, label }) => {
  return (
    <Link to={to} className={linkClasses} from={"/"}>
      <p className={"flex w-fit items-center gap-x-1"}>
        <Icon className={"h-5"} />
        <span className={"shrink-0"}>{label}</span>
      </p>
    </Link>
  );
};
