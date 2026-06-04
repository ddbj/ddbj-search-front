import { Input, InputGroup } from "@heroui/react";
import { clsx } from "clsx";
import type { FC } from "react";
import { ClearButton } from "@/features/searchResult/queryBuilder/premitives/ClearButton.tsx";

type Props = {
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  label: string;
};

const inputClasses = clsx("p-0");
const wrapperClasses = clsx(
  "h-10 w-full rounded border border-gray-200 bg-white px-2 text-sm text-gray-900 outline-none",
  "placeholder:text-gray-400",
  "hover:border-gray-300",
  "focus:outline-2 focus:-outline-offset-2",
);

export const TextInput: FC<Props> = ({ placeholder, label, value, onValueChange }) => {
  return (
    <InputGroup variant="secondary" className={wrapperClasses}>
      <InputGroup.Input
        aria-label={label}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange(event.currentTarget.value)}
      ></InputGroup.Input>
      <InputGroup.Suffix className={"p-0"}>
        <ClearButton onClick={() => onValueChange("")} />
      </InputGroup.Suffix>
    </InputGroup>
  );
};
