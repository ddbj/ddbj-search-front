import clsx from "clsx";
import type { FC } from "react";
import { Tooltip } from "@/components/heroui/Tooltip.tsx";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { PrettyJSON } from "@/features/searchDetail/ui/PrettyJSON.tsx";

type Props = {
  data: unknown;
};

export const PropertiesPanel: FC<Props> = ({ data }) => {
  const properties = JSON.stringify(data, null, 2);
  return (
    <PanelWrapper className={"gap-y-2 pb-4"}>
      <div className={"flex min-w-0 items-start gap-1 pt-2 text-sm font-bold"}>
        <Tooltip
          content={"Properties short description here"}
          placement={"top start"}
          closeDelay={100}
          classNames={{
            content: [clsx("bg-gray-500 text-white")],
          }}
        >
          <span className={"self-center pt-0.5"}>
            <CircleQuestionIcon className={"fill-text-primary h-4"} />
          </span>
        </Tooltip>
        <span>Properties</span>
      </div>
      {/*<div className={"h-36 rounded-sm bg-gray-800"}></div>*/}
      <PrettyJSON code={properties} />
    </PanelWrapper>
  );
};
