import { type FC, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { CheckboxText } from "@/features/searchResult/ui/CheckboxText.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";

type Props = {
  value: boolean;
  update: UpdateSearchFunctions["changeUmbrella"];
};

export const Umbrella: FC<Props> = ({ value, update }) => {
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
      labelStr={"Umbrella Project"}
      value={"umbrella"}
      isSelected={uiValue}
      setIsSelected={setUiValue}
    />
  );
};
