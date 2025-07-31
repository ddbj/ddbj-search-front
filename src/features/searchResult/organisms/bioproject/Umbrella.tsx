import { type FC } from "react";
import { CheckboxText } from "@/features/searchResult/ui/CheckboxText.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/hooks/useUpdateSearchFunctions.ts";

type Props = {
  value: boolean;
  update: UpdateSearchFunctions["changeUmbrella"];
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
