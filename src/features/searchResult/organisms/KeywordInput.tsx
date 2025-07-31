import { Input } from "@heroui/react";
import { type FC, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

type Props = {
  value: string[] | undefined;
  changeKeywords: (v: string[]) => void;
};

export const KeywordInput: FC<Props> = ({ value, changeKeywords }) => {
  const initialValue = value?.join(", ") ?? "";
  const [uiValue, setUiValue] = useState<string>(initialValue);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(initialValue, 200);

  useEffect(() => {
    setDebouncedValue(uiValue);
  }, [uiValue, setDebouncedValue]);

  useEffect(() => {
    const value = debouncedValue
      .split(",")
      .map((v) => v.trim())
      .filter((v) => v);
    changeKeywords(value);
  }, [debouncedValue, changeKeywords]);

  useEffect(() => {
    setUiValue((prev) => {
      const prevTrimmed = prev
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v)
        .join(", ");
      const next = (value ?? []).join(", ");
      return prevTrimmed === next ? prev : next;
    });
  }, [value, setUiValue]);

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
