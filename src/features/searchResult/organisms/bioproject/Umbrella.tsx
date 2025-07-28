import { useNavigate, useSearch } from "@tanstack/react-router";
import { type FC, useMemo } from "react";
import { CheckboxText } from "@/features/searchResult/ui/CheckboxText.tsx";
import type { AllSearch } from "@/schema/search.ts";

type Props = {};

export const Umbrella: FC<Props> = () => {
  const searchParams = useSearch({ strict: false });
  const isSelected = useMemo(() => {
    return searchParams.umbrella;
  }, [searchParams.umbrella]);
  const navigate = useNavigate();
  const onChange = (value: boolean) => {
    const { umbrella, ...rest } = searchParams;
    const search: AllSearch = value ? { umbrella: true, ...rest } : { ...rest };
    navigate({ search, from: "/", replace: true });
  };

  return (
    <CheckboxText
      labelStr={"Umbrella Project"}
      value={"umbrella"}
      isSelected={isSelected}
      setIsSelected={onChange}
    />
  );
};
