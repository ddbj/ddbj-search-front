import { Grant } from "@/features/searchResult/organisms/bioproject/Grant.tsx";
import { Organization } from "@/features/searchResult/organisms/bioproject/Organization.tsx";
import { Publication } from "@/features/searchResult/organisms/bioproject/Publication.tsx";
import { Umbrella } from "@/features/searchResult/organisms/bioproject/Umbrella.tsx";
import { DateSelector } from "@/features/searchResult/organisms/DateSelector.tsx";
import { KeywordInput } from "@/features/searchResult/organisms/KeywordInput.tsx";
import { OtherTypeSelector } from "@/features/searchResult/organisms/OtherTypeSelector.tsx";
import { QueryLists } from "@/features/searchResult/organisms/QueryLists.tsx";
import { TypeSelector } from "@/features/searchResult/organisms/TypeSelector.tsx";
import { type DBType, dbTypes } from "@/consts.ts";
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
      {currentType === dbTypes.bioproject && <Umbrella />}
      {currentType === dbTypes.bioproject && <Organization />}
      {currentType === dbTypes.bioproject && <Publication />}
      {currentType === dbTypes.bioproject && <Grant />}
      <DateSelector />
      <QueryLists />
    </aside>
  );
};
