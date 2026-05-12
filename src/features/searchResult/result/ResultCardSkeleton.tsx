import type { FC } from "react";

const blockClasses = "rounded-sm bg-gray-100";

export const ResultCardSkeleton: FC = () => {
  return (
    <article
      aria-busy="true"
      aria-label="Loading search result"
      className="flex animate-pulse flex-col gap-1 rounded-md border border-2 border-gray-100 bg-white px-2 py-2 text-sm"
      role="status"
    >
      <div className="flex gap-4">
        <span className={`${blockClasses} h-4 w-28`} />
        <span className={`${blockClasses} h-4 w-20`} />
      </div>
      <div className={`${blockClasses} mb-2 h-7 w-11/12`} />
      <div className="flex items-end justify-between gap-x-2">
        <div className="flex min-w-0 flex-col gap-1">
          <span className={`${blockClasses} h-4 w-36`} />
          <div className="flex flex-wrap gap-1">
            <span className={`${blockClasses} h-6 w-24`} />
            <span className={`${blockClasses} h-6 w-20`} />
            <span className={`${blockClasses} h-6 w-16`} />
            <span className={`${blockClasses} h-6 w-24`} />
            <span className={`${blockClasses} h-6 w-28`} />
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-[auto_auto] gap-x-2 gap-y-1">
          <span className={`${blockClasses} h-4 w-20`} />
          <span className={`${blockClasses} h-4 w-24`} />
          <span className={`${blockClasses} h-4 w-20`} />
          <span className={`${blockClasses} h-4 w-24`} />
          <span className={`${blockClasses} h-4 w-20`} />
          <span className={`${blockClasses} h-4 w-24`} />
        </div>
      </div>
    </article>
  );
};
