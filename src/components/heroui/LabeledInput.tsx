import { Input } from "@heroui/react";
import type { FC } from "react";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
};

const wrapperClasses = "flex flex-col gap-1.5";
const labelClasses = "text-sm font-medium leading-5 text-gray-700";
const inputClasses =
  "h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 shadow-none outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-fire-bush-600 focus:outline-2 focus:-outline-offset-2 focus:outline-fire-bush-600";

export const LabeledInput: FC<Props> = ({ label, onValueChange, placeholder, value }) => {
  return (
    <label className={wrapperClasses}>
      <span className={labelClasses}>{label}</span>
      <Input
        aria-label={label}
        className={inputClasses}
        fullWidth
        placeholder={placeholder}
        variant="secondary"
        value={value}
        onChange={(event) => onValueChange(event.currentTarget.value)}
      />
    </label>
  );
};
