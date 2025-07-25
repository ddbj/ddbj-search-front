import { Input } from "@heroui/react";
import { useSingleTextSearch } from "@/hooks/useSingleTextSearch.ts";
import type { FC } from "react";

type Props = {};

export const BioprojectGrant: FC<Props> = () => {
  const { uiValue, onChange } = useSingleTextSearch("grant");

  return (
    <div>
      <Input
        label={"Grant"}
        placeholder={"single query or * for all entries with grant"}
        value={uiValue}
        onValueChange={onChange}
      />
    </div>
  );
};
