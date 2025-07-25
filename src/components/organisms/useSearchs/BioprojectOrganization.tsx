import { Input } from "@heroui/react";
import { type FC } from "react";
import { useSingleTextSearch } from "@/hooks/useSingleTextSearch.ts";

type Props = {};

export const BioprojectOrganization: FC<Props> = () => {
  const { uiValue, onChange } = useSingleTextSearch("organization");

  return (
    <div>
      <Input
        label={"Organization"}
        placeholder={"single query or * for all entries with organization"}
        value={uiValue}
        onValueChange={onChange}
      />
    </div>
  );
};
