import { Checkbox } from "@heroui/react";
import clsx from "clsx";
import { type FC, useEffect, useState } from "react";
type Props = {
  labelStr: string;
  value: string;
  link?: string;
  isSelected?: boolean;
  onValueChange?: (value: string, isSelected: boolean) => void;
};

const wrapperClasses = clsx("flex overflow-hidden");
const linkClasses = clsx("text-blue-500");
export const CheckboxText: FC<Props> = ({
  link,
  labelStr,
  value,
  onValueChange,
  isSelected = false,
}) => {
  const [uiIsSelected, setUiIsSelected] = useState(isSelected);

  // useEffect(() => {
  //   if (onValueChange) {
  //     onValueChange(value, uiIsSelected);
  //   }
  // }, [uiIsSelected, onValueChange, value]);
  // useEffect(() => {
  //   setUiIsSelected(isSelected);
  // }, [isSelected]);

  if (link) {
    return (
      <div className={wrapperClasses}>
        <Checkbox
          radius={"sm"}
          disableAnimation
          value={value}
          isSelected={uiIsSelected}
          onValueChange={setUiIsSelected}
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
        isSelected={uiIsSelected}
        onValueChange={setUiIsSelected}
      >
        {labelStr}
      </Checkbox>
    );
  }
};
