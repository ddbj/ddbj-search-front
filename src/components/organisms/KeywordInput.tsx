import { Input } from "@heroui/react";
import { type FC, useEffect, useState } from "react";
import { useSearchQueryMutators, useSearchQueryState } from "@/state/SearchQueryState.ts";

type Props = {};

export const KeywordInput: FC<Props> = () => {
  // const [value, setValue] = React.useState("");
  const stateValue = useSearchQueryState().keywords;
  const { updateKeywords } = useSearchQueryMutators();
  const [uiValue, setUiValue] = useState("");

  useEffect(() => {
    setUiValue((stateValue ?? []).join(", "));
  }, [stateValue]);
  useEffect(() => {
    updateKeywords(uiValue);
  }, [uiValue]);

  return (
    <div>
      <Input
        label={"Keywords"}
        placeholder={"comma separated keywords "}
        value={uiValue}
        onValueChange={setUiValue}
      />
    </div>
  );
};
