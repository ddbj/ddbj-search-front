import { CheckboxText } from "@/components/morecules/CheckboxText.tsx";
import { dbLabels, type DBType, dbTypeList } from "@/consts.ts";
import type { FC } from "react";

type Props = {
  currentType: DBType;
};

export const OtherTypeSelector: FC<Props> = ({ currentType }) => {
  return (
    <div>
      OtherTypeSelector
      <div>
        <CheckboxText labelStr={dbLabels[currentType]} value={currentType} />
      </div>
      <div>Others</div>
      <div className={"flex flex-col"}>
        {dbTypeList
          .filter((key) => key !== currentType)
          .map((key) => {
            return <CheckboxText key={key} labelStr={dbLabels[key]} value={key} link={"#"} />;
          })}
      </div>
    </div>
  );
};
