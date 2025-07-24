import { DateSelector } from "@/components/organisms/useSearchs/DateSelector.tsx";
import { KeywordInput } from "@/components/organisms/useSearchs/KeywordInput.tsx";
import { OtherTypeSelector } from "@/components/organisms/useSearchs/OtherTypeSelector.tsx";
import { QueryLists } from "@/components/organisms/useSearchs/QueryLists.tsx";
import { TypeSelector } from "@/components/organisms/useSearchs/TypeSelector.tsx";
import type { DBType } from "@/consts.ts";
import type { FC } from "react";

type Props = {
  currentType?: DBType;
};
const wrapperClasses = "flex flex-col gap-4 w-96";

export const QueryBuilder: FC<Props> = ({ currentType }) => {
  return (
    <aside className={wrapperClasses}>
      <KeywordInput />
      {!currentType && <TypeSelector />}
      {currentType && <OtherTypeSelector currentType={currentType} />}
      <DateSelector />
      <QueryLists />
    </aside>
  );
};
