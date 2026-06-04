import { clsx } from "clsx";
import type { FC, PropsWithChildren } from "react";

type Props = {
  label: string;
} & PropsWithChildren;

const wrapperClasses = clsx("flex flex-col gap-0.5");
const labelClasses = clsx("text-sm leading-5 font-medium text-gray-700");

export const LabeledInput: FC<Props> = ({ label, children }) => {
  return (
    <label className={wrapperClasses}>
      <span className={labelClasses}>{label}</span>
      {children}
    </label>
  );
};
