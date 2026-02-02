import { Tooltip } from "@heroui/tooltip";
import clsx from "clsx";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";
import type { FC, ReactNode } from "react";

type Props = {
  term: string;
  toolTipContent?: ReactNode;
  children: ReactNode;
  termsNowrap?: boolean;
  contentNoWrap?: boolean;
};

export const InfoListItem: FC<Props> = ({
  children,
  term,
  toolTipContent,
  termsNowrap = true,
  contentNoWrap = false,
}) => {
  const termsClass = termsNowrap ? "text-nowrap" : "";
  const contentClass = contentNoWrap ? "text-nowrap" : "";

  return (
    <li className={"col-span-2 grid grid-cols-subgrid bg-white py-2"}>
      <div className={"flex items-center gap-1 font-bold"}>
        {toolTipContent && (
          <Tooltip
            content={toolTipContent}
            placement={"top-start"}
            closeDelay={100}
            classNames={{
              content: [clsx("bg-gray-500 text-white")],
            }}
          >
            <span>
              <CircleQuestionIcon className={"h-4 fill-text-primary"} />
            </span>
          </Tooltip>
        )}
        <span className={termsClass}>{term}</span>
      </div>
      <div className={contentClass}>{children}</div>
    </li>
  );
};
