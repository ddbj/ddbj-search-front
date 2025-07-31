import { type FC, useMemo } from "react";
import { type DBType, dbTypes } from "@/consts/db.ts";
import { Grant } from "@/features/searchResult/organisms/bioproject/Grant.tsx";
import { Organization } from "@/features/searchResult/organisms/bioproject/Organization.tsx";
import { Publication } from "@/features/searchResult/organisms/bioproject/Publication.tsx";
import { Umbrella } from "@/features/searchResult/organisms/bioproject/Umbrella.tsx";
import { DateSelector } from "@/features/searchResult/organisms/DateSelector.tsx";
import { KeywordInput } from "@/features/searchResult/organisms/KeywordInput.tsx";
import { OtherTypeSelector } from "@/features/searchResult/organisms/OtherTypeSelector.tsx";
import { type AllSearchParams, type BaseSearchParams, isBaseSearchKey } from "@/schema/search.ts";
import { dateRangeStringToData } from "@/utils/date.ts";
import { TypeSelector } from "./organisms/TypeSelector";
import type { DDBJSearchParams } from "@/features/searchResult/hooks/useDDBJSearch.ts";

type Props = {
  currentType: DBType | null;
  searchParams: DDBJSearchParams;
};
const wrapperClasses = "flex flex-col gap-4 w-96";

export const QueryBuilder: FC<Props> = ({ currentType, searchParams }) => {
  const { params, update } = searchParams;
  const {
    keywords,
    types,
    dateUpdated,
    datePublished,
    umbrella,
    organization,
    publication,
    grant,
  } = params;
  const {
    moveToEntryRoot,
    changeKeywords,
    mergeDBTypes,
    changeUpdated,
    changePublished,
    changeUmbrella,
    changeOrganization,
    changePublication,
    changeGrant,
  } = useMemo(() => update, [update]);
  const typeLinkParams = makeTypeLinkParams(searchParams.params);

  return (
    <aside className={wrapperClasses}>
      <KeywordInput value={keywords} changeKeywords={changeKeywords} />
      {!currentType && (
        <TypeSelector
          mergeDBTypes={mergeDBTypes}
          types={types ?? []}
          linkSearchParams={typeLinkParams}
        />
      )}
      {currentType && (
        <OtherTypeSelector
          currentType={currentType}
          moveToEntryRoot={moveToEntryRoot}
          linkSearchParams={typeLinkParams}
        />
      )}
      {currentType === dbTypes.bioproject && (
        <Umbrella value={umbrella ?? false} update={changeUmbrella} />
      )}
      {currentType === dbTypes.bioproject && (
        <Organization value={organization ?? ""} update={changeOrganization} />
      )}
      {currentType === dbTypes.bioproject && (
        <Publication value={publication ?? ""} update={changePublication} />
      )}
      {currentType === dbTypes.bioproject && <Grant value={grant ?? ""} update={changeGrant} />}
      <DateSelector
        published={(datePublished && dateRangeStringToData(datePublished)) ?? null}
        updated={(dateUpdated && dateRangeStringToData(dateUpdated)) ?? null}
        changePublished={changePublished}
        changeUpdated={changeUpdated}
      />
    </aside>
  );
};

const makeTypeLinkParams = (params: AllSearchParams): Omit<BaseSearchParams, "types"> => {
  const result = Object.fromEntries(
    Object.entries(params)
      .filter(([key, _value]) => isBaseSearchKey(key))
      .filter(([key, _value]) => key !== "types")
  );
  return result;
};

export const __TEST__QUERY_BUILDER = { makeTypeLinkParams };
