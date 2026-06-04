import { CloseIcon } from "@heroui/react";
import { clsx } from "clsx";
import type { FC } from "react";

type Props = {
  onClick?: () => void;
  className?: string;
};
const wrapperClasses = clsx(
  "grid size-5 cursor-pointer place-items-center rounded-full bg-gray-100",
);
export const ClearButton: FC<Props> = ({ onClick = () => {}, className = "" }) => {
  const cn = clsx(wrapperClasses, className);
  return (
    <span className={cn} onClick={onClick}>
      <CloseIcon className={"size-3"} />
    </span>
  );
};
