import { type FC } from "react";
import {
  type BioProjectObjectType,
  bioProjectObjectTypeValues,
  getBioProjectObjectTypeLabel,
} from "@/api/consts.ts";
import type { BioProjectFacetListResponse } from "@/api/facets/bioProject.ts";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import { formatNumber } from "@/utils/formatNumber.ts";

type Props = {
  value: BioProjectObjectType[];
  update: (objectTypes: BioProjectObjectType[]) => void;
  countData: BioProjectFacetListResponse["facets"]["objectType"];
};

const sectionClasses = "flex flex-col gap-0.5";
const titleClasses = "text-sm font-medium leading-5 text-gray-700";
const listClasses = "flex flex-col gap-1";

export const ObjectTypeSelector: FC<Props> = ({ value, update, countData }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);
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
