import { DateSelector } from "@/components/organisms/DateSelector.tsx";
import { QueryLists } from "@/components/organisms/QueryLists.tsx";
import type { FC } from "react";

type Props = {};

export const QueryBuilder: FC<Props> = () => {
  return (
    <aside>
      <QueryLists />
      <DateSelector />
    </aside>
  );
};
