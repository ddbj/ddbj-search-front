import { useQuery } from "@tanstack/react-query";
import { type FC } from "react";
import type { FacetItem } from "@/api/facets/base.ts";
import { dbLabels, type DBType, isDBType } from "@/consts/db.ts";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import { fetchAllFacets } from "@/fetch/facets/fetchAllFacets.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { BaseSearchParams } from "@/schema/search/base.ts";
import { formatNumber } from "@/utils/formatNumber.ts";

type Props = {
  value: DBType[];
  params: AllSearchParams;
  linkSearchParams: BaseSearchParams;
  update: (types: DBType[]) => void;
};

const sectionClasses = "flex flex-col gap-0.5";
const titleClasses = "text-sm font-medium leading-5 text-gray-700";
const listClasses = "flex flex-col gap-1";

export const TypeSelector: FC<Props> = ({ linkSearchParams, params, value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);
  const facetParams = makeTypeFacetParams(params);
  const { data: facetData } = useQuery({
    queryKey: ["fetchAllFacets", "type", ...Object.entries(facetParams)],
    queryFn: () => fetchAllFacets(facetParams, { facets: ["type"] }),
    placeholderData: (previousData) => previousData,
  });
  const countData: FacetItem[] = facetData?.facets?.type ?? [];
  const toggleDBTypes = (key: DBType, value: boolean) => {
    const next = value ? [...uiValue, key] : uiValue.filter((v) => v !== key);
    setUiValue([...new Set(next)]);
  };
  return (
    <section className={sectionClasses}>
      <h2 className={titleClasses}>Types</h2>
      <div className={listClasses}>
        {Object.entries(dbLabels).map(([name, label]) => {
          const isSelected = uiValue?.includes(name as DBType);
          const count = countData.find((item) => item.value === name)?.count ?? 0;
          return (
            <CheckboxText
              key={name}
              labelStr={label + ` (${formatNumber(count)})`}
              value={name}
              to={`/entry/${name}/`}
              isSelected={isSelected}
              setIsSelected={(v) => {
                if (!isDBType(name)) return;
                toggleDBTypes(name, v);
              }}
              search={linkSearchParams}
            />
          );
        })}
      </div>
    </section>
  );
};

const makeTypeFacetParams = (params: AllSearchParams): AllSearchParams => {
  const { types: _types, page: _page, perPage: _perPage, ...rest } = params;
  return rest;
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with selector param shaping logic.
export const __TEST__TYPE_SELECTOR = { makeTypeFacetParams };
