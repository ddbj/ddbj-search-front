import { Checkbox } from "@heroui/react";
import clsx from "clsx";
import { type FC } from "react";

type Props = {
  labelStr: string;
  value: string;
  link?: string;
  isSelected?: boolean;
  setIsSelected?: (value: boolean) => void;
};

const wrapperClasses = clsx("flex overflow-hidden");
const linkClasses = clsx("text-blue-500");
export const CheckboxText: FC<Props> = ({
  link,
  labelStr,
  value,
  isSelected = false,
  setIsSelected,
}) => {
  if (link) {
    return (
      <div className={wrapperClasses}>
        <Checkbox
          radius={"sm"}
          disableAnimation
          value={value}
          isSelected={isSelected}
          onValueChange={setIsSelected}
        ></Checkbox>
        {/*TODO: use router link*/}
        <a href={link} className={linkClasses}>
          {labelStr}
        </a>
      </div>
    );
  } else {
    return (
      <Checkbox
        radius={"sm"}
        disableAnimation
        value={value}
        isSelected={isSelected}
        onValueChange={setIsSelected}
      >
        {labelStr}
      </Checkbox>
    );
  }
};
