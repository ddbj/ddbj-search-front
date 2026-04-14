import clsx from "clsx";
import { Tooltip } from "@/components/heroui/Tooltip.tsx";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";
import type { FC, ReactNode } from "react";

type Props = {
  term: string;
  toolTipContent?: ReactNode;
  tooltipOpen?: boolean;
  children: ReactNode;
  termsNowrap?: boolean;
  contentNoWrap?: boolean;
};

export const InfoListItem: FC<Props> = ({
  children,
  term,
  toolTipContent,
  tooltipOpen,
  termsNowrap = true,
  contentNoWrap = false,
}) => {
  const termsClass = clsx("min-w-0", termsNowrap ? "whitespace-nowrap" : "whitespace-normal break-words");
  const contentClass = clsx(
    "min-w-0",
    contentNoWrap ? "whitespace-nowrap" : "whitespace-normal break-words",
  );

  return (
    <li className={"col-span-2 grid min-w-0 grid-cols-subgrid bg-white py-2"}>
      <div className={"flex min-w-0 items-start gap-1 font-bold"}>
        {toolTipContent && (
          <Tooltip
            content={toolTipContent}
            isOpen={tooltipOpen ? true : undefined}
            placement={"top start"}
            closeDelay={100}
            classNames={{
              content: [clsx("bg-gray-500 text-white")],
            }}
          >
            <span className={"self-center pt-0.5"}>
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
