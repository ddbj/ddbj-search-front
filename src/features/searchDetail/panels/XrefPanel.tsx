import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { XrefListItem } from "@/features/searchDetail/ui/XrefListItem.tsx";
import type { FC } from "react";

type Props = {};

export const XrefPanel: FC<Props> = () => {
  return (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>DB Xref</div>
      <InfoList>
        <XrefListItem
          term={"BioSample"}
          values={[
            ["SAMN00189479", "#"],
            ["SAMN00189480", "#"],
            ["SAMN00189481", "#"],
            ["SAMN00189482", "#"],
          ]}
        />
        <XrefListItem
          term={"SRA Experiment"}
          values={[
            ["SRX037187", "#"],
            ["SRX037188", "#"],
            ["SRX037189", "#"],
            ["SRX037190", "#"],
          ]}
        />
        <XrefListItem
          term={"SRA Run"}
          values={[
            ["SRR090115", "#"],
            ["SRR090116", "#"],
            ["SRR090476", "#"],
            ["SRR090477", "#"],
          ]}
        />
        <XrefListItem term={"SRA Study"} values={[["SRP005147", "#"]]} />
      </InfoList>
    </PanelWrapper>
  );
};
