import { useRouter } from "@tanstack/react-router";
import { isArray, isUndefined } from "is-what";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { routeTree } from "@/routeTree.gen.ts";
import type { AllResourcesKey, AllSearch } from "@/schema/search.ts";

export const useMultipleTextSearch = (searchKey: AllResourcesKey) => {
  const router = useRouter();
  const param = router.latestLocation.search?.[searchKey];
  if (!isUndefined(param) && !isArray(param)) throw new Error("param must be array");
  const initialUiValue = param?.join() ?? "";
  const [uiValue, setUiValue] = useState(initialUiValue);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(initialUiValue, 500);

  const onChange = (str: string) => {
    setUiValue(str);
    setDebouncedValue(str);
  };
  useEffect(() => {
    const searchParams = router.latestLocation.search;
    const restParams = Object.fromEntries(
      Object.entries(searchParams).filter(([key, _value]) => key !== searchKey)
    ) as AllSearch;
    const newValue = debouncedValue
      .split(",")
      .map((str) => str.trim())
      .filter((str) => str !== "");

    const search: AllSearch = { ...restParams, [searchKey]: newValue };
    if (newValue.length === 0) {
      delete search[searchKey];
    }
    router.navigate({ from: routeTree.fullPath, search, replace: true });
  }, [debouncedValue, router, searchKey]);
  useEffect(() => {
    const str = (param ?? []).join(", ");
    setUiValue(str);
  }, [param]);

  return { uiValue, onChange };
};
