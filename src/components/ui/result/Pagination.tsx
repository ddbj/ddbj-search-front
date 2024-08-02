import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import React, { FC } from "react";

type Props = {
  current: number;
  total: number;
};
type ButtonState = "current" | "idle" | "disabled";

export const Pagination: FC<Props> = ({ current, total }) => {
  const pages = dividePages(makePaginationPages(total, current));
  return (
    <div className={"mt-4 text-center"}>
      <Button label={"Prev"} page={current - 1} state={current === 1 ? "disabled" : "idle"} />
      {pages.map((group, index) => {
        return (
          <>
            {index > 0 && <span>...</span>}
            {group.map((page) => (
              <Button
                key={page}
                label={page}
                page={page}
                state={page === current ? "current" : "idle"}
              />
            ))}
          </>
        );
      })}
      <Button label={"Next"} page={current + 1} state={current === total ? "disabled" : "idle"} />
    </div>
  );
};

const Button: FC<{ label: string | number; page: number; state: ButtonState }> = ({
  label,
  page,
  state,
}) => {
  const link = `?list=${page}`;
  // const isCurrent =
  const classes = clsx(
    "inline-block",
    "px-3",
    "py-1",
    "rounded-md",
    "mx-1",
    state === "current" && "bg-primary text-white",
    state === "idle" && "bg-gray-200 text-black duration-200 hover:bg-gray-300",
    state === "disabled" && "bg-gray-50 text-gray-300"
  );
  if (state === "disabled") {
    return null;
  }
  return (
    <Link className={classes} to={link} resetScroll={true}>
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

export const __test__ = { makePaginationPages, dividePages };
