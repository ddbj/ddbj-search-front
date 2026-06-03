import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { CircleQuestionIcon } from "@/features/shared/graphics/CircleQuestionIcon.tsx";
import { Tooltip } from "@/features/shared/Tooltip.tsx";

type VerticalAlign = "start" | "center";

type Props = {
  term: string;
  toolTipContent?: ReactNode;
  children: ReactNode;
  termsNowrap?: boolean;
  contentNoWrap?: boolean;
  verticalAlign?: VerticalAlign;
};

export const InfoListItem: FC<Props> = ({
  children,
  term,
  toolTipContent,
  termsNowrap = true,
  contentNoWrap = false,
  verticalAlign = "start",
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
    <li className={"col-span-2 grid min-w-0 grid-cols-subgrid bg-white py-2 leading-5"}>
      <div className={clsx("flex min-w-0 gap-0.5 font-bold", `items-${verticalAlign}`)}>
        <span className={termsClass}>{term}</span>
        {toolTipContent && (
          <Tooltip
            content={toolTipContent}
            placement={"top"}
            closeDelay={100}
            classNames={{
              content: [clsx("bg-gray-500 text-white")],
            }}
          >
            <span className={"inline-flex h-5 shrink-0 items-center"}>
              <CircleQuestionIcon className={"fill-text-primary h-5"} />
            </span>
          </Tooltip>
        )}
      </div>
      <div className={contentClass}>{children}</div>
    </li>
  );
};
