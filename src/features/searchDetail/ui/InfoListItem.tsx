import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { Tooltip } from "@/components/heroui/Tooltip.tsx";
import { CircleQuestionIcon } from "@/features/graphics/CircleQuestionIcon.tsx";

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
    <li className={"col-span-2 grid min-w-0 grid-cols-subgrid bg-white py-2"}>
      <div className={clsx("flex min-w-0 gap-1 font-bold", `items-${verticalAlign}`)}>
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
              <CircleQuestionIcon className={"fill-text-primary h-5"} />
            </span>
          </Tooltip>
        )}
        <span className={termsClass}>{term}</span>
      </div>
      <div className={contentClass}>{children}</div>
    </li>
  );
};
