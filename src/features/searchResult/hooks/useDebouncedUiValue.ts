import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

/**
 * A custom hook that manages debounced UI value updates.
 * It provides a way to handle immediate UI updates while debouncing the actual model updates.
 *
 * @param value - The initial value to be debounced
 * @param updateModel - Callback function to update the model with the debounced value
 * @param ms
 * @returns Object containing the current UI value and a setter function
 * @template T - Type of the value being debounced
 */

export const useDebouncedUiValue = <T>(
  value: T,
  updateModel: (val: T) => void,
  ms: number = 200
) => {
  const [uiValue, setUiValue] = useState<T>(value);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(value, ms);

  useEffect(() => {
    setDebouncedValue(uiValue);
  }, [uiValue, setDebouncedValue]);

  useEffect(() => {
    console.log("initial update", debouncedValue);
    updateModel(debouncedValue);
  }, [debouncedValue, updateModel]);

  useEffect(() => {
    setUiValue(value);
  }, [value, setUiValue]);

  return { uiValue, setUiValue };
};
