import type { FC } from "react";
import { ResultCard, type ResultCardProps } from "@/features/searchResult/result/ResultCard.tsx";
import { ResultCardSkeleton } from "@/features/searchResult/result/ResultCardSkeleton.tsx";

type Props = {
  data: ResultCardProps[];
  isLoading?: boolean;
  skeletonCount?: number;
};

export const ResultList: FC<Props> = ({ data, isLoading = false, skeletonCount = 3 }) => {
  return (
    <div className={"flex flex-col gap-4"}>
      {isLoading
        ? Array.from({ length: skeletonCount }, (_, index) => <ResultCardSkeleton key={index} />)
        : data.map((item, index) => <ResultCard key={index} {...item} />)}
    </div>
  );
};
