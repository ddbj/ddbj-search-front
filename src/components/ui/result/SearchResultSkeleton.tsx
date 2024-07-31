import { clsx } from "clsx";
import { FC } from "react";
import { TailwindElementProps } from "@/types/types.ts";

type Props = TailwindElementProps;

export const SearchResultSkeleton: FC<Props> = ({ className }) => {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

const SkeletonCard: FC<TailwindElementProps> = ({ children, className }) => {
  return (
    <div className={clsx("h-32 rounded-md border border-gray-200 bg-gray-50", className)}>
      {children}
    </div>
  );
};
