import { type FC } from "react";
import { LabeledInput } from "@/components/heroui/LabeledInput.tsx";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import { TextInput } from "@/features/searchResult/queryBuilder/premitives/TextInput.tsx";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Organization: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);

  return (
    <LabeledInput label={"Organization"}>
      <TextInput label={"Organization"} value={uiValue} onValueChange={setUiValue} />
    </LabeledInput>
  );
};
