import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import { format } from "date-fns";
import { FC } from "react";
import { LockIcon } from "@/components/icon/lockIcon.tsx";
import { ElasticSearchSource } from "@/types/api.ts";
import { TailwindElementProps } from "@/types/types.ts";
import { getDbXrefs, getTitle } from "@/utils/apiWrappers.ts";

type Props = {
  item: ElasticSearchSource;
};

export const SearchResultCard: FC<Props> = ({ item }) => {
  const title = getTitle(item);
  const detailUrl = `./entry/${item.type}/${item.identifier}`;
  const refsCount = getDbXrefs(item).length;
  // const isVisible = item.visibility.includes("unrestricted");
  const isVisible = true;

  const groups: { type: string; count: number }[] = Object.entries(
    getDbXrefs(item).reduce<Record<string, number>>(
      (result, dbXref) => ({
        ...result,
        [dbXref.type]: (result[dbXref.type] || 0) + 1,
      }),
      {}
    ) ?? []
  ).map(([type, count]) => ({ type, count }));

  return (
    <Wrapper href={detailUrl}>
      <div className={"flex justify-between"}>
        <Tags identifier={item.identifier} type={item.type} />
        {!isVisible && (
          <p className={"flex items-center gap-x-1 rounded bg-primary px-1"}>
            <LockIcon className={"w-3 fill-white"} />
            <span className={"shrink-0 text-xs  text-white"}>{item.accessibility}</span>
          </p>
        )}
      </div>
      <Title title={title || ""} className={"-mt-2"} />
      <Related className="text-sm">{makeRefCountMessage(refsCount)}</Related>
      <div className="flex justify-between">
        <BadgeWrapper>
          {groups.map((group) => (
            <Badge key={group.type}>
              {group.type} : {group.count}
            </Badge>
          ))}
        </BadgeWrapper>
        {item.datePublished && <DatePublished datePublished={item.datePublished} />}
      </div>
    </Wrapper>
  );
};

const makeRefCountMessage = (count: number = 0) => {
  return count === 1 ? "Related to 1 object" : `Related to ${count} objects`;
};

const Wrapper: FC<TailwindElementProps & { href: string }> = ({ href, children, className }) => {
  return (
    <Link
      className={clsx(
        "flex flex-col gap-2 rounded-md border border-gray-200 p-2 hover:text-primary-dark",
        className
      )}
      to={href}
      target="_blank"
      preload={"intent"}
    >
      {children}
    </Link>
  );
};

const Tags: FC<TailwindElementProps & { identifier: string; type: string }> = ({
  identifier,
  type,
}) => {
  return (
    <div className="flex gap-2 text-sm">
      <span>{identifier}</span>
      <span>{type}</span>
    </div>
  );
};

const Title: FC<TailwindElementProps & { title: string }> = ({ title, className }) => {
  return <h3 className={clsx("text-2xl leading-tight", className)}>{title}</h3>;
};

const Related: FC<TailwindElementProps> = ({ children, className }) => {
  return <h4 className={clsx("text-sm", className)}>{children}</h4>;
};

const BadgeWrapper: FC<TailwindElementProps> = ({ children, className }) => {
  return <div className={clsx("flex flex-wrap gap-1", className)}>{children}</div>;
};

const Badge: FC<TailwindElementProps> = ({ children, className }) => {
  return (
    <span className={clsx("rounded bg-gray-100 p-1 text-xs font-bold text-gray-900", className)}>
      {children}
    </span>
  );
};

const DatePublished: FC<TailwindElementProps & { datePublished: string }> = ({
  datePublished,
  className,
}) => {
  return (
    <div className={clsx("flex gap-2 whitespace-nowrap text-sm", className)}>
      <span>Published at</span>
      <time className="flex gap-2" dateTime={datePublished}>
        <span>{format(datePublished, "MM/dd/yyyy")}</span>
        <span>{format(datePublished, "p")}</span>
      </time>
    </div>
  );
};
