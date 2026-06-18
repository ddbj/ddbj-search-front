import { useQuery } from "@tanstack/react-query";
import { clsx } from "clsx";
import { type FC } from "react";
import { dbLabels, type DBType, isDBType } from "@/consts/db.ts";
import { fetchAllFacets } from "@/lib/fetch/facets/fetchAllFacets.ts";
import { formatNumber } from "@/lib/formatting/formatNumber.ts";
import type { FacetItem } from "@/schema/api/facets/base.ts";
import type { AllSearchParams } from "@/schema/search/all.ts";
import type { AnySearchParams } from "@/schema/search/any.ts";
import { useDebouncedUiValue } from "@/views/searchResult/components/queryBuilder/hooks/useDebouncedUiValue.ts";
import { CheckboxText } from "@/views/searchResult/components/queryBuilder/primitives/CheckboxText.tsx";

type Props = {
  value: DBType[];
  params: AllSearchParams;
  linkSearchParams: AnySearchParams | ((targetType: DBType) => AnySearchParams);
  update: (types: DBType[]) => void;
};

const sectionClasses = clsx("flex flex-col gap-0.5");
const titleClasses = clsx("text-sm leading-5 font-medium text-gray-700");
const listClasses = clsx("flex flex-col items-start gap-1");

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
          if (!isDBType(name)) return null;
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
                toggleDBTypes(name, v);
              }}
              search={resolveLinkSearchParams(linkSearchParams, name)}
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

const resolveLinkSearchParams = (
  linkSearchParams: Props["linkSearchParams"],
  targetType: DBType,
): AnySearchParams => {
  return typeof linkSearchParams === "function" ? linkSearchParams(targetType) : linkSearchParams;
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with selector param shaping logic.
export const __TEST__TYPE_SELECTOR = { makeTypeFacetParams };
