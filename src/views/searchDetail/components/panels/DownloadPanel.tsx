import type { FC } from "react";
import type { SearchDetailResponse } from "@/api/types.ts";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";
import { PanelWrapper } from "@/views/searchDetail/components/ui/PanelWrapper.tsx";

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
          <li key={i} className={"bg-white py-2"}>
            <a className={"text-fire-bush"} target={"_blank"} href={item.contentUrl}>
              {item.encodingFormat}
            </a>
          </li>
        ))}
      </InfoList>
    </PanelWrapper>
  );
};
