import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import type { SearchDetailResponse } from "@/api/types.ts";
import type { FC } from "react";

type Props = {
  className?: string;
  data: SearchDetailResponse;
};

export const DownloadPanel: FC<Props> = ({ data }) => {
  const items = data.distribution ?? [];
  if (!items.length) {
    return <></>;
  }
  return (
    <PanelWrapper>
      <div className={"pt-2 text-sm font-bold"}>Download</div>
      <InfoList useGrid={false}>
        {items.map((item, i) => (
          <li key={i}>
            <a className={"text-fire-bush flex bg-white"} target={"_blank"} href={item.contentUrl}>
              {item.encodingFormat}
            </a>
          </li>
        ))}
      </InfoList>
    </PanelWrapper>
  );
};
