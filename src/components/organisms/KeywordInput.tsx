import { Input } from "@heroui/react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { type FC } from "react";
import { routeTree } from "@/routeTree.gen.ts";

type Props = {};

export const KeywordInput: FC<Props> = () => {
  const searchParams = useSearch({
    strict: false,
  });
  const navigate = useNavigate();
  const uiValue = searchParams?.keywords?.join() ?? "";

  //todo differed update
  const onChange = (str: string) => {
    const keywords = str.split(",");
    const search = { ...searchParams, keywords: keywords.length ? keywords : undefined };
    navigate({ from: routeTree.fullPath, search, replace: true });
  };
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
