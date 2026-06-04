import { Tooltip as HeroTooltip } from "@heroui/react";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  classNames?: {
    content?: string | string[];
  };
  closeDelay?: number;
  content: ReactNode;
  isOpen?: boolean;
  placement?:
    | "top"
    | "top left"
    | "top right"
    | "top start"
    | "top end"
    | "bottom"
    | "bottom left"
    | "bottom right"
    | "bottom start"
    | "bottom end"
    | "left"
    | "left top"
    | "left bottom"
    | "start"
    | "start top"
    | "start bottom"
    | "right"
    | "right top"
    | "right bottom"
    | "end"
    | "end top"
    | "end bottom";
};

export const Tooltip: FC<Props> = ({
  children,
  classNames,
  closeDelay,
  content,
  isOpen,
  placement,
}) => {
  return (
    <HeroTooltip isOpen={isOpen} delay={closeDelay}>
      <HeroTooltip.Trigger className={"leading-none"}>{children}</HeroTooltip.Trigger>
      <HeroTooltip.Content className={clsx(classNames?.content)} placement={placement} showArrow>
        {content}
      </HeroTooltip.Content>
    </HeroTooltip>
  );
};
