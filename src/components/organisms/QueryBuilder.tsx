import { BioprojectGrant } from "@/components/organisms/useSearchs/BioprojectGrant.tsx";
import { BioprojectOrganization } from "@/components/organisms/useSearchs/BioprojectOrganization.tsx";
import { BioprojectPublication } from "@/components/organisms/useSearchs/BioprojectPublication.tsx";
import { BioprojectUmbrella } from "@/components/organisms/useSearchs/BioprojectUmbrella.tsx";
import { DateSelector } from "@/components/organisms/useSearchs/DateSelector.tsx";
import { KeywordInput } from "@/components/organisms/useSearchs/KeywordInput.tsx";
import { OtherTypeSelector } from "@/components/organisms/useSearchs/OtherTypeSelector.tsx";
import { QueryLists } from "@/components/organisms/useSearchs/QueryLists.tsx";
import { TypeSelector } from "@/components/organisms/useSearchs/TypeSelector.tsx";
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
      {currentType === dbTypes.bioproject && <BioprojectUmbrella />}
      {currentType === dbTypes.bioproject && <BioprojectOrganization />}
      {currentType === dbTypes.bioproject && <BioprojectPublication />}
      {currentType === dbTypes.bioproject && <BioprojectGrant />}
      <DateSelector />
      <QueryLists />
    </aside>
  );
};
