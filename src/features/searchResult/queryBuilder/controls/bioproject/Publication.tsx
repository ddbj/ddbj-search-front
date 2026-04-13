import { LabeledInput } from "@/components/heroui/LabeledInput.tsx";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";
import type { FC } from "react";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Publication: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);

  return (
    <div>
      <LabeledInput
        label={"Publication"}
        placeholder={"single query or * for all entries with publication"}
        value={uiValue}
        onValueChange={setUiValue}
      />
    </div>
  );
};
