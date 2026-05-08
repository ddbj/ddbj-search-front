import { type FC, useMemo, useState } from "react";
import type { FacetItem } from "@/api/facets/base.ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import { TextInput } from "@/features/searchResult/queryBuilder/premitives/TextInput.tsx";
import { formatNumber } from "@/utils/formatNumber.ts";

type Props = {
  value: string | null;
  items: FacetItem[];
  update: (organism: string | null) => void;
};

const sectionClasses = "flex flex-col gap-2";
const headingClasses = "flex flex-col gap-0.5";
const titleClasses = "text-sm font-medium leading-5 text-gray-700";
const listClasses = "flex flex-col gap-1";

export const OrganismSelector: FC<Props> = ({ value, items, update }) => {
  const [filterValue, setFilterValue] = useState("");
  const filteredItems = useMemo(() => {
    return filterOrganismItems(items, filterValue);
  }, [items, filterValue]);

  return (
    <section className={sectionClasses}>
      <div className={headingClasses}>
        <h2 className={titleClasses}>Organism</h2>
        <TextInput
          label="Organism"
          placeholder="Search organism"
          value={filterValue}
          onValueChange={setFilterValue}
        />
      </div>
      <div className={listClasses}>
        {filteredItems.map((item) => {
          const isSelected = value === item.value;
          return (
            <CheckboxText
              key={item.value}
              labelStr={getOrganismItemLabel(item)}
              value={item.value}
              isSelected={isSelected}
              setIsSelected={(nextIsSelected) => {
                update(nextIsSelected ? item.value : null);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

const normalizeFilterText = (value: string) => value.trim().toLocaleLowerCase();

const getOrganismDisplayName = (item: FacetItem) => item.label ?? item.value;

const getOrganismItemLabel = (item: FacetItem) => {
  return `${getOrganismDisplayName(item)} (${formatNumber(item.count)})`;
};

const filterOrganismItems = (items: FacetItem[], filterValue: string) => {
  const normalizedFilterValue = normalizeFilterText(filterValue);
  if (!normalizedFilterValue) return items;
  return items.filter((item) => {
    const label = item.label ? normalizeFilterText(item.label) : "";
    const value = normalizeFilterText(item.value);
    return label.includes(normalizedFilterValue) || value.includes(normalizedFilterValue);
  });
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with selector filtering logic.
export const __TEST__ORGANISM_SELECTOR = {
  filterOrganismItems,
  getOrganismItemLabel,
};
