import { Grant } from "@/features/queryBuilder/organisms/bioproject/Grant.tsx";
import { Organization } from "@/features/queryBuilder/organisms/bioproject/Organization.tsx";
import { Publication } from "@/features/queryBuilder/organisms/bioproject/Publication.tsx";
import { Umbrella } from "@/features/queryBuilder/organisms/bioproject/Umbrella.tsx";
import { DateSelector } from "@/features/queryBuilder/organisms/DateSelector.tsx";
import { KeywordInput } from "@/features/queryBuilder/organisms/KeywordInput.tsx";
import { OtherTypeSelector } from "@/features/queryBuilder/organisms/OtherTypeSelector.tsx";
import { QueryLists } from "@/features/queryBuilder/organisms/QueryLists.tsx";
import { TypeSelector } from "@/features/queryBuilder/organisms/TypeSelector.tsx";
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
