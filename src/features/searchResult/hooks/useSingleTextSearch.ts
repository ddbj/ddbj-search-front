import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

export const useSingleTextSearch = (value: string, update: (val: string) => void) => {
  const [uiValue, setUiValue] = useState<string>(value);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(value, 200);

  useEffect(() => {
    setDebouncedValue(uiValue);
  }, [uiValue, setDebouncedValue]);

  useEffect(() => {
    update(debouncedValue);
  }, [debouncedValue, update]);

  useEffect(() => {
    setUiValue(value);
  }, [value, setUiValue]);

  return { uiValue, setUiValue };
};
