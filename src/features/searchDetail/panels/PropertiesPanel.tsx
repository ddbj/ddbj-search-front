import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import type { FC } from "react";

type Props = {};

export const PropertiesPanel: FC<Props> = () => {
  return (
    <PanelWrapper className={"gap-y-2 pb-4"}>
      <div className={"pt-2 text-sm font-bold"}>Properties</div>
      <div className={"h-36 rounded-sm bg-gray-800"}></div>
    </PanelWrapper>
  );
};
