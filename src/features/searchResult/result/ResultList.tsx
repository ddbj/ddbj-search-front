import { ResultCard, type ResultCardProps } from "@/features/searchResult/result/ResultCard.tsx";
import type { FC } from "react";

type Props = {
  data: ResultCardProps[];
};

export const ResultList: FC<Props> = ({ data }) => {
  return (
    <div className={"flex flex-col gap-4"}>
      {data.map((item, index) => (
        <ResultCard key={index} {...item} />
      ))}
    </div>
  );
};
