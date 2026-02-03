import { Input } from "@heroui/react";
import { type FC } from "react";
import { useDebouncedUiValue } from "@/features/searchResult/queryBuilder/hooks/useDebouncedUiValue.ts";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Organization: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useDebouncedUiValue(value, update);

  return (
    <div>
      <Input
        label={"Organization"}
        placeholder={"single query or * for all entries with organization"}
        value={uiValue}
        onValueChange={setUiValue}
      />
    </div>
  );
};
