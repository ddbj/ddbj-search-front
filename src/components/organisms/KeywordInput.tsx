import { Input } from "@heroui/react";
import { type FC, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";

type Props = {};

export const KeywordInput: FC<Props> = () => {
  const stateValue = useSearchQueryState().keywords;
  const { updateKeywords } = useSearchQueryMutators();
  const onValueChange = useCallback(
    (str: string) => {
      updateKeywords(str);
    },
    [updateKeywords]
  );

  const uiValue = useMemo(() => {
    return (stateValue ?? []).join(", ");
  }, [stateValue]);

  return (
    <div>
      <Input
        label={"Keywords"}
        placeholder={"comma separated keywords "}
        value={uiValue}
        onValueChange={onValueChange}
      />
    </div>
  );
};
