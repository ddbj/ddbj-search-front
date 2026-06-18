import { ScrollShadow } from "@heroui/react";
import { clsx } from "clsx";
import { type FC, useCallback } from "react";
import type { FacetItem } from "@/api/facets/base.ts";
import { formatNumber } from "@/lib/formatting/formatNumber.ts";
import { useDebouncedUiValue } from "@/views/searchResult/components/queryBuilder/hooks/useDebouncedUiValue.ts";
import { CheckboxText } from "@/views/searchResult/components/queryBuilder/primitives/CheckboxText.tsx";
import { TextInput } from "@/views/searchResult/components/queryBuilder/primitives/TextInput.tsx";

type Props = {
  value: string | null;
  items: FacetItem[];
  update: (organism: string | null) => void;
};

const sectionClasses = clsx("flex flex-col gap-2");
const headingClasses = clsx("flex flex-col gap-0.5");
const titleClasses = clsx("text-sm leading-5 font-medium text-gray-700");
const listClasses = clsx("flex flex-col items-start gap-1");
const listScrollClasses = clsx("max-h-[200px] overflow-y-auto");

export const OrganismSelector: FC<Props> = ({ value, items, update }) => {
  const updateTaxId = useCallback(
    (nextValue: string) => {
      update(normalizeTaxIdInput(nextValue));
    },
    [update],
  );
  const { uiValue, setUiValue } = useDebouncedUiValue(value ?? "", updateTaxId);

  return (
    <section className={sectionClasses}>
      <div className={headingClasses}>
        <h2 className={titleClasses}>Organism</h2>
        <TextInput
          label="Organism"
          placeholder="Enter TaxID"
          value={uiValue}
          onValueChange={setUiValue}
        />
      </div>
      <ScrollShadow
        className={listScrollClasses}
        data-testid="organism-option-list"
        hideScrollBar={false}
      >
        <div className={listClasses}>
          {items.map((item) => {
            const isSelected = normalizeTaxIdInput(uiValue) === item.value;
            return (
              <CheckboxText
                key={item.value}
                labelStr={getOrganismItemLabel(item)}
                value={item.value}
                isSelected={isSelected}
                setIsSelected={(nextIsSelected) => {
                  setUiValue(nextIsSelected ? item.value : "");
                }}
              />
            );
          })}
        </div>
      </ScrollShadow>
    </section>
  );
};

const normalizeTaxIdInput = (value: string): string | null => {
  return value === "" ? null : value;
};

const getOrganismDisplayName = (item: FacetItem) => item.label ?? item.value;

const getOrganismItemLabel = (item: FacetItem) => {
  return `${getOrganismDisplayName(item)} (${formatNumber(item.count)})`;
};

// eslint-disable-next-line react-refresh/only-export-components -- Test helper stays colocated with selector input logic.
export const __TEST__ORGANISM_SELECTOR = {
  getOrganismItemLabel,
  normalizeTaxIdInput,
};
