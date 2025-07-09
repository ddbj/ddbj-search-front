import { DateSelector } from "@/components/organisms/DateSelector.tsx";
import { QueryLists } from "@/components/organisms/QueryLists.tsx";
import type { FC } from "react";

type Props = {};
const wrapperClasses = "flex flex-col gap-4 w-96 p-4";

export const QueryBuilder: FC<Props> = () => {
  return (
    <aside className={wrapperClasses}>
      <QueryLists />
      <DateSelector />
    </aside>
  );
};
