import { clsx } from "clsx";
import { type FC, Fragment } from "react";
import type { AnySearchParams } from "@/schema/search.ts";
import { Link } from "@tanstack/react-router";
// import { useSearchParams } from "@/hooks/useSearchParams.ts";

type Props = {
  current: number;
  total: number;
  params: AnySearchParams;
};
type ButtonState = "current" | "idle" | "disabled";

export const Pagination: FC<Props> = ({ current, total, params }) => {
  const pages = dividePages(makePaginationPages(total, current));
  if (total <= 1) return null;
  return (
    <div className={""}>
      <Button
        label={"Prev"}
        page={current - 1}
        state={current === 1 ? "disabled" : "idle"}
        params={params}
      />
      {pages.map((group, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <span key={"..."}>...</span>}
            {group.map((page) => (
              <Button
                key={page}
                label={page}
                page={page}
                params={params}
                state={page === current ? "current" : "idle"}
              />
            ))}
          </Fragment>
        );
      })}
      <Button
        label={"Next"}
        page={current + 1}
        state={current === total ? "disabled" : "idle"}
        params={params}
      />
    </div>
  );
};

const baseButtonClasses = clsx("mx-1 inline-block rounded-md px-3 py-1");
const activeButtonClasses = clsx(baseButtonClasses, "bg-bg-primary text-white");
const idleButtonClasses = clsx(
  baseButtonClasses,
  "bg-gray-200 text-black duration-200 hover:bg-gray-300"
);

const Button: FC<{
  label: string | number;
  page: number;
  state: ButtonState;
  params: AnySearchParams;
}> = ({ label, page, state, params }) => {
  const classes = clsx(
    state === "current" && activeButtonClasses,
    state === "idle" && idleButtonClasses
  );
  const link = "";
  if (state === "disabled") {
    return null;
  }
  const searchParams = { ...params, page };
  return (
    <Link className={classes} to={"/entry"} search={searchParams} resetScroll={true}>
      {label}
    </Link>
  );
};

const makePaginationPages = (total: number, current: number): number[] => {
  const pages = new Set<number>();

  // Always include the first and last pages
  pages.add(1);
  pages.add(total);

  // Include the current page
  pages.add(current);

  // Include pages around the current page
  if (current > 1) pages.add(current - 1);
  if (current < total) pages.add(current + 1);

  // Convert the set to an array and sort it
  return Array.from(pages).sort((a, b) => a - b);
};

const dividePages = (pages: number[]): number[][] => {
  // Divide pages into groups of consecutive numbers
  return pages.reduce<[number][]>((acc, page) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup[lastGroup.length - 1] + 1 === page) {
      lastGroup.push(page);
    } else {
      acc.push([page]);
    }
    return acc;
  }, []);
};

export const __TEST__Pagination__ = { makePaginationPages, dividePages };
