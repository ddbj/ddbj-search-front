import { useRouter } from "@tanstack/react-router";
import { isString, isUndefined } from "is-what";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { routeTree } from "@/routeTree.gen.ts";
import type { SearchSchemaKey, SearchSchemaType } from "@/schema/search.ts";

export const useSingleTextSearch = (searchKey: SearchSchemaKey) => {
  const router = useRouter();
  const param = router.latestLocation.search?.[searchKey];
  if (!isUndefined(param) && !isString(param)) throw new Error("param must be string");
  const initialUiValue = param ?? "";
  const [uiValue, setUiValue] = useState(initialUiValue);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(initialUiValue, 200);

  const onChange = (str: string) => {
    setUiValue(str);
    setDebouncedValue(str);
  };
  useEffect(() => {
    const searchParams = router.latestLocation.search;
    const currentValue = searchParams[searchKey];
    if (currentValue === debouncedValue) return;
    const restParams = Object.fromEntries(
      Object.entries(searchParams).filter(([key, _value]) => key !== searchKey)
    ) as SearchSchemaType;
    const search: SearchSchemaType = { ...restParams, [searchKey]: debouncedValue };
    if (debouncedValue === "") {
      delete search[searchKey];
    }
    router.navigate({ from: routeTree.fullPath, search, replace: true });
  }, [debouncedValue, router, searchKey]);

  useEffect(() => {
    setUiValue(param ?? "");
  }, [param]);

  return { uiValue, onChange };
};
