import { Input } from "@heroui/react";
import { useSingleTextSearch } from "@/features/searchResult/hooks/useSingleTextSearch.ts";
import type { FC } from "react";

type Props = {
  value: string;
  update: (v: string) => void;
};

export const Grant: FC<Props> = ({ value, update }) => {
  const { uiValue, setUiValue } = useSingleTextSearch(value, update);

  return (
    <div>
      <Input
        label={"Grant"}
        placeholder={"single query or * for all entries with grant"}
        value={uiValue}
        onValueChange={setUiValue}
      />
    </div>
  );
};
