import { clsx } from "clsx";
import React, { FC } from "react";
import { useSearchParams } from "@/hooks/useSearchParams.ts";

type Props = {
  current: number;
  total: number;
  setPage: (page: number) => void;
};
type ButtonState = "current" | "idle" | "disabled";

export const Pagination: FC<Props> = ({ current, total, setPage }) => {
  const pages = dividePages(makePaginationPages(total, current));
  if (total <= 1) return null;
  return (
    <div className={"mt-4 text-center"}>
      <Button
        label={"Prev"}
        page={current - 1}
        state={current === 1 ? "disabled" : "idle"}
        setPage={setPage}
      />
      {pages.map((group, index) => {
        return (
          <React.Fragment key={index}>
            {index > 0 && <span>...</span>}
            {group.map((page) => (
              <Button
                key={page}
                label={page}
                page={page}
                state={page === current ? "current" : "idle"}
                setPage={setPage}
              />
            ))}
          </React.Fragment>
        );
      })}
      <Button
        label={"Next"}
        page={current + 1}
        state={current === total ? "disabled" : "idle"}
        setPage={setPage}
      />
    </div>
  );
};

const Button: FC<{
  label: string | number;
  page: number;
  state: ButtonState;
  setPage: (page: number) => void;
}> = ({ label, page, state, setPage }) => {
  const params = useSearchParams();
  params.set("list", page.toString());
  const link = `?${params.toString()}`;
  const classes = clsx(
    "inline-block",
    "px-3",
    "py-1",
    "rounded-md",
    "mx-1",
    state === "current" && "bg-primary text-white",
    state === "idle" && "bg-gray-200 text-black duration-200 hover:bg-gray-300"
    // state === "disabled" && "bg-gray-50 text-gray-300"
  );
  if (state === "disabled") {
    return null;
  }
  return (
    <a
      className={classes}
      href={link}
      onClick={(e) => {
        e.preventDefault();
        setPage(page - 1);
      }}
    >
      {label}
    </a>
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
