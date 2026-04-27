import type { FC, PropsWithChildren } from "react";

type Props = {
  label: string;
} & PropsWithChildren;

const wrapperClasses = "flex flex-col gap-0.5";
const labelClasses = "text-sm font-medium leading-5 text-gray-700";

export const LabeledInput: FC<Props> = ({ label, children }) => {
  return (
    <label className={wrapperClasses}>
      <span className={labelClasses}>{label}</span>
      {children}
    </label>
  );
};
