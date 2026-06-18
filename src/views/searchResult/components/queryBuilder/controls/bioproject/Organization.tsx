import { type FC } from "react";
import { useDebouncedUiValue } from "@/views/searchResult/components/queryBuilder/hooks/useDebouncedUiValue.ts";
import { TextInput } from "@/views/searchResult/components/queryBuilder/primitives/TextInput.tsx";
import { LabeledInput } from "@/views/shared/components/LabeledInput.tsx";

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
