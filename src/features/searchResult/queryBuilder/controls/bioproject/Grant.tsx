import { LabeledInput } from "@/components/heroui/LabeledInput.tsx";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import type { FC } from "react";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Grant: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);

  return (
    <LabeledInput
      label={"Grant"}
      placeholder={"single query or * for all entries with grant"}
      value={uiValue}
      onValueChange={setUiValue}
    />
  );
};
