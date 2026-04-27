import { Input } from "@heroui/react";
import type { FC } from "react";
import { clsx } from "clsx";

type Props = {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  label: string;
};

const inputClasses = clsx(
  "h-10 w-full rounded border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none",
  "placeholder:text-gray-400",
  "hover:border-gray-300",
  "focus:outline-2 focus:-outline-offset-2",
);

export const TextInput: FC<Props> = ({ placeholder, label, value, onValueChange }) => {
  return (
    <Input
      aria-label={label}
      className={inputClasses}
      fullWidth
      placeholder={placeholder}
      variant="secondary"
      value={value}
      onChange={(event) => onValueChange(event.currentTarget.value)}
    />
  );
};
