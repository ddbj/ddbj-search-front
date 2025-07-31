import { type FC } from "react";
import { CheckboxText } from "@/features/searchResult/ui/CheckboxText.tsx";
import type { DDBJSearchParams } from "@/features/searchResult/hooks/useDDBJSearch.ts";

type Props = {
  value: boolean;
  update: DDBJSearchParams["update"]["changeUmbrella"];
};

export const Umbrella: FC<Props> = ({ value, update }) => {
  return (
    <CheckboxText
      labelStr={"Umbrella Project"}
      value={"umbrella"}
      isSelected={value}
      setIsSelected={update}
    />
  );
};
