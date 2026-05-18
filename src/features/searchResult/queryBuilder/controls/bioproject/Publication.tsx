import type { FC } from "react";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import { TextInput } from "@/features/searchResult/queryBuilder/premitives/TextInput.tsx";
import { LabeledInput } from "@/features/shared/LabeledInput.tsx";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Publication: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);

  return (
    <LabeledInput label={"Publication"}>
      <TextInput label={"Publication"} value={uiValue} onValueChange={setUiValue} />
    </LabeledInput>
  );
};
