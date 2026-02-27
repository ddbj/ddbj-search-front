import { type FC, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { CheckboxText } from "@/features/searchResult/queryBuilder/premitives/CheckboxText.tsx";
import { formatNumber } from "@/utils/formatNumber.ts";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";

type Props = {
  value: boolean;
  update: UpdateSearchFunctions["changeUmbrella"];
  count: number;
};

export const Umbrella: FC<Props> = ({ value, update, count }) => {
  const [uiValue, setUiValue] = useState<boolean>(value);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(value, 200);

  useEffect(() => {
    setDebouncedValue(uiValue);
  }, [uiValue, setDebouncedValue]);

  useEffect(() => {
    update(debouncedValue);
  }, [debouncedValue, update]);

  useEffect(() => {
    setUiValue(value);
  }, [value, setUiValue]);

  return (
    <CheckboxText
      labelStr={`Umbrella Project(${formatNumber(count)})`}
      value={"umbrella"}
      isSelected={uiValue}
      setIsSelected={setUiValue}
    />
  );
};
