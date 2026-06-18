import type { FC } from "react";
import { useDebouncedUiValue } from "@/views/searchResult/components/queryBuilder/hooks/useDebouncedUiValue.ts";
import { TextInput } from "@/views/searchResult/components/queryBuilder/primitives/TextInput.tsx";
import { LabeledInput } from "@/views/shared/components/LabeledInput.tsx";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Grant: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);

  return (
    <LabeledInput label={"Grant"}>
      <TextInput label={"Grant"} value={uiValue} onValueChange={setUiValue} />
    </LabeledInput>
  );
};
