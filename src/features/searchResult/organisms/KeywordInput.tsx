import { Input } from "@heroui/react";
import { type FC } from "react";
import { useMultipleTextSearch } from "@/features/searchResult/hooks/useMultipleTextSearch.ts";

type Props = {};

export const KeywordInput: FC<Props> = () => {
  const { uiValue, onChange } = useMultipleTextSearch("keywords");

  return (
    <div>
      <Input
        label={"Keywords"}
        placeholder={"comma separated keywords "}
        value={uiValue}
        onValueChange={onChange}
      />
    </div>
  );
};
