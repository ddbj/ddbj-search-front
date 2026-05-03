import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { Tooltip } from "@/components/heroui/Tooltip.tsx";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";

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
  const termsClass = clsx(
    "min-w-0",
    termsNowrap ? "whitespace-nowrap" : "break-words whitespace-normal",
  );
  const contentClass = clsx(
    "min-w-0",
    contentNoWrap ? "whitespace-nowrap" : "break-words whitespace-normal",
  );

  return (
    <li className={"col-span-2 grid min-w-0 grid-cols-subgrid bg-white py-2"}>
      <div className={"flex min-w-0 items-start gap-1 font-bold"}>
        {toolTipContent && (
          <Tooltip
            content={toolTipContent}
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
        )}
        <span className={termsClass}>{term}</span>
      </div>
      <div className={contentClass}>{children}</div>
    </li>
  );
};
