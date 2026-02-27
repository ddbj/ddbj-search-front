import { QueryClient, useQuery } from "@tanstack/react-query";
import { type FC, useMemo } from "react";
import { isBioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
import { type DBType, dbTypes } from "@/consts/db.ts";
import { Grant } from "@/features/searchResult/queryBuilder/controls/bioproject/Grant.tsx";
import { Organization } from "@/features/searchResult/queryBuilder/controls/bioproject/Organization.tsx";
import { Publication } from "@/features/searchResult/queryBuilder/controls/bioproject/Publication.tsx";
import { Umbrella } from "@/features/searchResult/queryBuilder/controls/bioproject/Umbrella.tsx";
import { DateSelectors } from "@/features/searchResult/queryBuilder/controls/DateSelectors.tsx";
import { KeywordInput } from "@/features/searchResult/queryBuilder/controls/KeywordInput.tsx";
import { OtherTypeSelector } from "@/features/searchResult/queryBuilder/controls/OtherTypeSelector.tsx";
import { fetchAllFacets } from "@/fetch/facets/fetchAllFacets.ts";
import { fetchFacets } from "@/fetch/utils/fetchFacets.ts";
import { type BaseSearchParams, isBaseSearchKey } from "@/schema/search/base.ts";
import { isBioprojectSearchParams } from "@/schema/search/bioProject.ts";
import { TypeSelector } from "./controls/TypeSelector.tsx";
import type { FacetListResponse } from "@/api/types.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import type { SearchParams } from "@/schema/search/types.ts";

type Props = {
  currentType: DBType | null;
  update: UpdateSearchFunctions;
  params: AnySearchParams;
};
const wrapperClasses = "flex flex-col gap-4 w-96";

export const QueryBuilder: FC<Props> = ({ currentType, update, params }) => {
  const { keywords, types, datePublishedFrom, datePublishedTo, dateModifiedFrom, dateModifiedTo } =
    params;
  const {
    moveToEntryRoot,
    changeKeywords,
    setDBTypes,
    changeDateModifiedRange,
    changeDatePublishedRange,
  } = useMemo(() => update, [update]);
  const typeLinkParams = makeTypeLinkParams(params);
  const { data: facetData } = useQuery({
    queryKey: ["fetchFacets", ...Object.entries(params), currentType],
    queryFn: () => fetchFacets(currentType, params),
    placeholderData: (previousData) => previousData,
  });

  return (
    <aside className={wrapperClasses}>
      <KeywordInput value={keywords ?? []} update={changeKeywords} />
      {!currentType && (
        <TypeSelector
          countData={facetData?.facets.type ?? []}
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
      {currentType === "bioproject" && <BioProjectQueries {...{ update, facetData, params }} />}
      <DateSelectors
        published={`${datePublishedFrom ?? ""},${datePublishedTo ?? ""}`}
        modified={`${dateModifiedFrom ?? ""},${dateModifiedTo ?? ""}`}
        changePublished={changeDatePublishedRange}
        changeModified={changeDateModifiedRange}
      />
    </aside>
  );
};

const BioProjectQueries = ({
  update,
  facetData,
  params,
}: {
  update: UpdateSearchFunctions;
  facetData: FacetListResponse | undefined;
  params: SearchParams;
}) => {
  const { changeUmbrella, changeOrganization, changePublication, changeGrant } = useMemo(
    () => update,
    [update]
  );
  if (!isBioProjectFacetListResponse(facetData)) return <></>;
  if (!isBioprojectSearchParams(params)) return <></>;
  const { umbrella, organization, publication, grant } = params;
  // console.log(facetData);
  const count =
    facetData?.facets?.objectType?.find((v) => v.value === "UmbrellaBioProject")?.count || 0;
  return (
    <>
      <Umbrella value={umbrella ?? false} update={changeUmbrella} count={count} />
      <Organization value={organization ?? ""} update={changeOrganization} />
      <Publication value={publication ?? ""} update={changePublication} />
      <Grant value={grant ?? ""} update={changeGrant} />
    </>
  );
};

const makeTypeLinkParams = (params: AnySearchParams): BaseSearchParams => {
  const result = Object.fromEntries(
    Object.entries(params).filter(([key, _value]) => isBaseSearchKey(key))
  );
  return result;
};

export const __TEST__QUERY_BUILDER = { makeTypeLinkParams };
