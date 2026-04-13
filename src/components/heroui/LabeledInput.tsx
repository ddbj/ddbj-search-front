import { Input } from "@heroui/react";
import type { FC } from "react";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
};

export const LabeledInput: FC<Props> = ({ label, onValueChange, placeholder, value }) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <Input
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange(event.currentTarget.value)}
      />
    </label>
  );
};
