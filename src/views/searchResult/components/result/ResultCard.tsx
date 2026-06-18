import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { Fragment, type FC, useMemo } from "react";
import { getAccessibilityLabels, type AccessibilityValue } from "@/api/valueTypes.ts";
import { getDbLabel, getXrefDbLabel } from "@/consts/db.ts";
import { relatedLinkLabels, searchResultDateLabels } from "@/consts/entryDisplayLabels.ts";
import { reorderXrefs } from "@/utils/reorderXrefs.ts";
import { LockIcon } from "@/views/shared/icons/LockIcon.tsx";

type Props = {
  title: string;
  id: string;
  type: string;
  relations: Record<string, number>;
  accessibility: AccessibilityValue;
  publishedAt?: string | null;
  updatedAt?: string | null;
  submittedAt?: string | null;
};
export type ResultCardProps = Props;

const wrapperClasses = clsx(
  "hover:border-link-primary flex flex-col gap-1 rounded-md border border-2 border-gray-100 bg-white px-2 py-2 text-sm transition-all hover:shadow-md",
);
export const ResultCard: FC<Props> = ({
  id,
  type,
  title,
  relations,
  accessibility,
  publishedAt,
  submittedAt,
  updatedAt,
}) => {
  const to = `/entry/${type}/${id}/`;
  const total = Object.values(relations).reduce((a, b) => a + b, 0);
  return (
    <Link to={to} from={"/"} search={{}}>
      <div className={wrapperClasses}>
        <div className={"flex items-start justify-between gap-2"}>
          <p className={"flex min-w-0 flex-wrap gap-x-4 gap-y-1"}>
            <span>{id}</span>
            <span>{getDbLabel(type)}</span>
          </p>
          {accessibility === "controlled-access" && (
            <p
              className={
                "bg-bg-light flex shrink-0 items-center gap-x-0.5 rounded-sm px-1 py-0.5 text-xs text-white"
              }
            >
              <LockIcon className={"size-4 fill-current"} />
              <span>{getAccessibilityLabels(accessibility)}</span>
            </p>
          )}
        </div>
        <h3 className={"mb-2 text-2xl leading-none wrap-anywhere"}>{title}</h3>
        <div className={"flex items-end justify-between gap-x-2"}>
          <div className={"flex flex-col gap-1"}>
            <span>
              {relatedLinkLabels.resultCount}: {total}
            </span>
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
    if (submittedAt) result[searchResultDateLabels.dateCreated] = submittedAt;
    if (publishedAt) result[searchResultDateLabels.datePublished] = publishedAt;
    if (updatedAt) result[searchResultDateLabels.dateModified] = updatedAt;
    return result;
  }, [publishedAt, updatedAt, submittedAt]);
  if (!hasDate) {
    return <div></div>;
  }
  return (
    <dl className={"grid grid-cols-[auto_auto] gap-x-2"}>
      {Object.entries(data).map(([key, value]) => (
        <Fragment key={key}>
          <dt className={"text-nowrap"}>{key}</dt>
          <dd className={"font-mono text-nowrap"}>{value}</dd>
        </Fragment>
      ))}
    </dl>
  );
};
