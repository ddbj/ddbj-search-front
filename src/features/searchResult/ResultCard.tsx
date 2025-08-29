import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import type { EntriesApiResponse } from "@/schema/api/entries.ts";
import type { FC } from "react";

type Props = {
  linkTo?: string;
};
export type ResultCardProps = Props;

const wrapperClasses = clsx(
  "h-24 rounded-md border border-2 border-gray-100 bg-white p-4 transition-all hover:border-link-primary hover:shadow-md"
);
export const ResultCard: FC<Props> = ({ linkTo = "/entry/bioproject/PRJ" }) => {
  return (
    <Link to={linkTo} from={"/"} search={{}}>
      <div className={wrapperClasses}>ResultCard</div>
    </Link>
  );
};

export const parseResultCardProps = (res: EntriesApiResponse["items"][0]): Props => {
  return {};
};
