import { useQuery } from "@tanstack/react-query";
import { type FC, useMemo } from "react";
import type { FacetItem } from "@/api/facets/base.ts";
import { type DBType } from "@/consts/db.ts";
import { Grant } from "@/features/searchResult/queryBuilder/controls/bioproject/Grant.tsx";
import { ObjectTypeSelector } from "@/features/searchResult/queryBuilder/controls/bioproject/ObjectTypeSelector.tsx";
import { Organization } from "@/features/searchResult/queryBuilder/controls/bioproject/Organization.tsx";
import { Publication } from "@/features/searchResult/queryBuilder/controls/bioproject/Publication.tsx";
import { DateSelectors } from "@/features/searchResult/queryBuilder/controls/DateSelectors.tsx";
import { KeywordInput } from "@/features/searchResult/queryBuilder/controls/KeywordInput.tsx";
import { OrganismSelector } from "@/features/searchResult/queryBuilder/controls/OrganismSelector.tsx";
import { OtherTypeSelector } from "@/features/searchResult/queryBuilder/controls/OtherTypeSelector.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import {
  fetchOrganismFacets,
  makeOrganismFacetQueryKey,
} from "@/fetch/facets/fetchOrganismFacets.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { type BaseSearchParams, isBaseSearchKey } from "@/schema/search/base.ts";
import { isBioprojectSearchParams } from "@/schema/search/bioProject.ts";
import type { SearchParams } from "@/schema/search/types.ts";
import { TypeSelector } from "./controls/TypeSelector.tsx";

type Props = {
  currentType: DBType | null;
  update: UpdateSearchFunctions;
  params: AnySearchParams;
};
const wrapperClasses = "flex w-96 shrink-0 flex-col gap-4";

export const QueryBuilder: FC<Props> = ({ currentType, update, params }) => {
  const {
    keywords,
    types,
    organism,
    datePublishedFrom,
    datePublishedTo,
    dateModifiedFrom,
    dateModifiedTo,
  } = params;
  const {
    moveToEntryRoot,
    changeKeywords,
    changeOrganism,
    setDBTypes,
    changeDateModifiedRange,
    changeDatePublishedRange,
  } = useMemo(() => update, [update]);
  const typeLinkParams = makeTypeLinkParams(params);

  return (
    <aside className={wrapperClasses}>
      <KeywordInput value={keywords ?? []} update={changeKeywords} />
      {!currentType && (
        <TypeSelector
          params={params as AllSearchParams}
          update={setDBTypes}
          value={types ?? []}
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
      <OrganismFacetSelector
        currentType={currentType}
        params={params}
        value={organism ?? null}
        update={changeOrganism}
      />
      {currentType === "bioproject" && <BioProjectQueries {...{ update, params }} />}
      <DateSelectors
        published={`${datePublishedFrom ?? ""},${datePublishedTo ?? ""}`}
        modified={`${dateModifiedFrom ?? ""},${dateModifiedTo ?? ""}`}
        changePublished={changeDatePublishedRange}
        changeModified={changeDateModifiedRange}
      />
    </aside>
  );
};

const OrganismFacetSelector = ({
  currentType,
  params,
  value,
  update,
}: {
  currentType: DBType | null;
  params: AnySearchParams;
  value: string | null;
  update: UpdateSearchFunctions["changeOrganism"];
}) => {
  const { data, isSuccess } = useQuery({
    queryKey: makeOrganismFacetQueryKey(currentType, params),
    queryFn: () => fetchOrganismFacets(currentType, params),
    placeholderData: (previousData) => previousData,
  });
  if (!shouldShowOrganismSelector(data, isSuccess)) return null;

  return <OrganismSelector value={value} items={data ?? []} update={update} />;
};

const shouldShowOrganismSelector = (
  items: FacetItem[] | undefined,
  isFetchSuccess: boolean,
): boolean => {
  if (!isFetchSuccess) return true;
  return (items?.length ?? 0) > 0;
};

const BioProjectQueries = ({
  update,
  params,
}: {
  update: UpdateSearchFunctions;
  params: SearchParams;
}) => {
  const { changeObjectTypes, changeOrganization, changePublication, changeGrant } = useMemo(
    () => update,
    [update],
  );
  if (!isBioprojectSearchParams(params)) return <></>;
  const { objectTypes, organization, publication, grant } = params;
  return (
    <>
      <ObjectTypeSelector value={objectTypes ?? []} params={params} update={changeObjectTypes} />
      <Organization value={organization ?? ""} update={changeOrganization} />
      <Publication value={publication ?? ""} update={changePublication} />
      <Grant value={grant ?? ""} update={changeGrant} />
    </>
  );
};

const makeTypeLinkParams = (params: AnySearchParams): BaseSearchParams => {
  const result = Object.fromEntries(
    Object.entries(params).filter(([key, _value]) => isBaseSearchKey(key)),
  );
  return result;
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with query builder state shaping logic.
export const __TEST__QUERY_BUILDER = { makeTypeLinkParams, shouldShowOrganismSelector };
