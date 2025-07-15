import { Input } from "@heroui/react";
import { type FC } from "react";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";

type Props = {};

export const KeywordInput: FC<Props> = () => {
  const keywords = useSearchQueryState().keywords;
  const { updateKeywords } = useSearchQueryMutators();
  return (
    <div>
      <Input
        label={"Keywords"}
        placeholder={"comma separated keywords "}
        value={keywords}
        onValueChange={updateKeywords}
      />
    </div>
  );
};
