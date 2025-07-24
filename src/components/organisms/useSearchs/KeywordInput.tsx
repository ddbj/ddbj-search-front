import { Input } from "@heroui/react";
import { useRouter } from "@tanstack/react-router";
import { type FC, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { routeTree } from "@/routeTree.gen.ts";
import type { GlobalSearchSchemaType } from "@/schema/search.ts";

type Props = {};

export const KeywordInput: FC<Props> = () => {
  const router = useRouter();
  const initialUiValue = router.latestLocation.search?.keywords?.join() ?? "";
  const [uiValue, setUiValue] = useState(initialUiValue);
  const [debouncedValue, setDebouncedValue] = useDebounceValue(initialUiValue, 200);

  const onChange = (str: string) => {
    setUiValue(str);
    setDebouncedValue(str);
  };
  useEffect(() => {
    const searchParams = router.latestLocation.search;
    const { keywords, ...rest } = searchParams;
    const newKeywords = debouncedValue
      .split(",")
      .map((str) => str.trim())
      .filter((str) => str !== "");

    const search: GlobalSearchSchemaType = { ...rest, keywords: newKeywords };
    if (newKeywords.length === 0) {
      delete search.keywords;
    }
    router.navigate({ from: routeTree.fullPath, search, replace: true });
  }, [debouncedValue, router]);
  useEffect(() => {
    const str = (router.latestLocation.search.keywords ?? []).join(", ");
    setUiValue(str);
  }, [router.latestLocation.search.keywords]);

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
