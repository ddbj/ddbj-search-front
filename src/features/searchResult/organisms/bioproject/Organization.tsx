import { Input } from "@heroui/react";
import { type FC } from "react";
import { useSingleTextSearch } from "@/features/searchResult/hooks/useSingleTextSearch.ts";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Organization: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useSingleTextSearch(value, update);

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
