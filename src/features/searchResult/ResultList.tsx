import { ResultCard } from "@/features/searchResult/ResultCard.tsx";
import type { FC } from "react";

type Props = {};

export const ResultList: FC<Props> = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      {Array(20)
        .fill(null)
        .map((item, index) => (
          <ResultCard key={index} />
        ))}
    </div>
  );
};
