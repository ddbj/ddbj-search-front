import { useQuery } from "@tanstack/react-query";
import { type FC } from "react";
import {
  type BioProjectObjectType,
  bioProjectObjectTypeValues,
  getBioProjectObjectTypeLabel,
} from "@/api/consts.ts";
import type { BioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import { fetchBioProjectFacets } from "@/fetch/facets/fetchBioProjectFacets.ts";
import type { BioprojectSearchParams } from "@/schema/search/bioProject.ts";
import { formatNumber } from "@/utils/formatNumber.ts";

type Props = {
  value: BioProjectObjectType[];
  params: BioprojectSearchParams;
  update: (objectTypes: BioProjectObjectType[]) => void;
};

const sectionClasses = "flex flex-col gap-0.5";
const titleClasses = "text-sm font-medium leading-5 text-gray-700";
const listClasses = "flex flex-col gap-1 items-start";

export const ObjectTypeSelector: FC<Props> = ({ value, params, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);
  const facetParams = makeObjectTypeFacetParams(params);
  const { data: facetData } = useQuery({
    queryKey: ["fetchBioProjectFacets", "objectType", ...Object.entries(facetParams)],
    queryFn: () => fetchBioProjectFacets(facetParams, { facets: ["objectType"] }),
    placeholderData: (previousData) => previousData,
  });
  const countData: BioProjectFacetListResponse["facets"]["objectType"] =
    facetData?.facets?.objectType ?? [];
  const toggleObjectTypes = (key: BioProjectObjectType, value: boolean) => {
    const next = value ? [...uiValue, key] : uiValue.filter((v) => v !== key);
    setUiValue([...new Set(next)]);
  };

  return (
    <section className={sectionClasses}>
      <h2 className={titleClasses}>Object Type</h2>
      <div className={listClasses}>
        {bioProjectObjectTypeValues.map((name) => {
          const isSelected = uiValue.includes(name);
          const count = countData?.find((item) => item.value === name)?.count ?? 0;
          return (
            <CheckboxText
              key={name}
              labelStr={`${getBioProjectObjectTypeLabel(name)} (${formatNumber(count)})`}
              value={name}
              isSelected={isSelected}
              setIsSelected={(v) => toggleObjectTypes(name, v)}
            />
          );
        })}
      </div>
    </section>
  );
};

const makeObjectTypeFacetParams = (params: BioprojectSearchParams): BioprojectSearchParams => {
  const { objectTypes: _objectTypes, page: _page, perPage: _perPage, ...rest } = params;
  return rest;
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with selector param shaping logic.
export const __TEST__OBJECT_TYPE_SELECTOR = { makeObjectTypeFacetParams };
