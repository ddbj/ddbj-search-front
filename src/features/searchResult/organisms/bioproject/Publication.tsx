import { Input } from "@heroui/react";
import { useSingleTextSearch } from "@/features/searchResult/hooks/useSingleTextSearch.ts";
import type { FC } from "react";

type Props = {};

export const Publication: FC<Props> = () => {
  const { uiValue, onChange } = useSingleTextSearch("publication");

  return (
    <div>
      <Input
        label={"Publication"}
        placeholder={"single query or * for all entries with publication"}
        value={uiValue}
        onValueChange={onChange}
      />
    </div>
  );
};
