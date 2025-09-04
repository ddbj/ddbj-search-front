import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { getDbLabel } from "@/consts/db.ts";
import type { FC } from "react";
import type { EntryListResponse } from "@/api/entries/base.ts";

type Props = {
  title: string;
  id: string;
  type: string;
  relations: Record<string, number>;
  publishedAt?: string;
};
export type ResultCardProps = Props;

const wrapperClasses = clsx(
  "flex flex-col gap-1 rounded-md border border-2 border-gray-100 bg-white p-4 text-sm transition-all hover:border-link-primary hover:shadow-md"
);
export const ResultCard: FC<Props> = ({ id, type, title, relations, publishedAt }) => {
  const to = `/entry/${type}/${id}`;
  const total = Object.values(relations).reduce((a, b) => a + b, 0);
  return (
    <Link to={to} from={"/"} search={{}}>
      <div className={wrapperClasses}>
        <p className={"flex gap-4"}>
          <span>{id}</span>
          <span>{getDbLabel(type)}</span>
        </p>
        <h3 className={"mb-2 text-2xl leading-none"}>{title}</h3>
        <div className={"flex items-end justify-between"}>
          <div className={"flex flex-col gap-1"}>
            <span>Related to {total} objects</span>
            <ul className={"flex flex-wrap gap-1"}>
              {Object.entries(relations).map(([key, value]) => (
                <li className={"rounded-sm bg-gray-100 px-2 py-1 text-xs font-bold"} key={key}>
                  {getDbLabel(key)}:{value}
                </li>
              ))}
            </ul>
          </div>
          {publishedAt && <p>Published at ${publishedAt}</p>}
        </div>
      </div>
    </Link>
  );
};

export const parseResultCardProps = (res: EntryListResponse["items"][0]): Props => {
  return {
    title: res.title,
    id: res.identifier,
    type: res.type,
    relations: res.dbXrefs,
  };
};
