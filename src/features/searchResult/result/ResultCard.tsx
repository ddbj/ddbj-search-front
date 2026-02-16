import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { type FC, useMemo } from "react";
import { getDbLabel, getXrefDbLabel } from "@/consts/db.ts";
import { formatToDateStr } from "@/utils/dateTime.ts";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";
import type { EntryListResponse } from "@/api/entries/base.ts";

type Props = {
  title: string;
  id: string;
  type: string;
  relations: Record<string, number>;
  publishedAt?: string | null;
  updatedAt?: string | null;
  submittedAt?: string | null;
};
export type ResultCardProps = Props;

const wrapperClasses = clsx(
  "flex flex-col gap-1 rounded-md border border-2 border-gray-100 bg-white px-2 py-2 text-sm transition-all hover:border-link-primary hover:shadow-md"
);
export const ResultCard: FC<Props> = ({
  id,
  type,
  title,
  relations,
  publishedAt,
  submittedAt,
  updatedAt,
}) => {
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
        <div className={"flex items-end justify-between gap-x-2"}>
          <div className={"flex flex-col gap-1"}>
            <span>Related to {total} objects</span>
            <ul className={"flex flex-wrap gap-1"}>
              {reorderXrefs(relations).map(([key, value]) => (
                <li className={"rounded-sm bg-gray-100 px-2 py-1 text-xs font-bold"} key={key}>
                  {getXrefDbLabel(key)}:{value}
                </li>
              ))}
            </ul>
          </div>
          <DateTable {...{ submittedAt, publishedAt, updatedAt }} />
        </div>
      </div>
    </Link>
  );
};

type DataTableProps = {
  publishedAt?: string | null;
  updatedAt?: string | null;
  submittedAt?: string | null;
};
const DateTable: FC<DataTableProps> = ({ publishedAt, submittedAt, updatedAt }) => {
  const hasDate = publishedAt || submittedAt || updatedAt;
  const data: Record<string, string | null> = useMemo(() => {
    const result: Record<string, string | null> = {};
    if (submittedAt) result["Submitted at"] = submittedAt;
    if (publishedAt) result["Published at"] = publishedAt;
    if (updatedAt) result["Updated at"] = updatedAt;
    return result;
  }, [publishedAt, updatedAt, submittedAt]);
  if (!hasDate) {
    return <div></div>;
  }
  return (
    <dl className={"grid grid-cols-[auto_auto] gap-x-2"}>
      {Object.entries(data).map(([key, value]) => (
        <>
          <dt className={"text-nowrap"}>{key}</dt>
          <dd className={"font-mono text-nowrap"}>{value}</dd>
        </>
      ))}
    </dl>
  );
};

export const parseResultCardProps = (res: EntryListResponse["items"][0]): Props => {
  const updatedAt = res.dateModified ? formatToDateStr(res.dateModified) : null;
  const submittedAt = res.dateCreated ? formatToDateStr(res.dateCreated) : null;
  const publishedAt = res.datePublished ? formatToDateStr(res.datePublished) : null;
  return {
    title: res.title,
    id: res.identifier,
    type: res.type,
    relations: res.dbXrefsCount,
    updatedAt,
    submittedAt,
    publishedAt,
  };
};
