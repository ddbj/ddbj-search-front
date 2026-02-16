import { dbTypes } from "@/consts/db.ts";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { DownloadListItem } from "../ui/DownloadListItem";
import type { SearchDetailResponse } from "@/utils/searchDetailResponse.ts";
import type { ComponentProps, FC } from "react";

type Props = {
  className?: string;
  data: SearchDetailResponse;
};

type ItemProps = ComponentProps<typeof DownloadListItem>;

export const DownloadPanel: FC<Props> = ({ className, data }) => {
  const itemsProps = composeItemProps(data);
  if (itemsProps.length) {
    return (
      <PanelWrapper>
        <div className={"pt-2 text-sm font-bold"}>Download</div>
        <InfoList useGrid={false}>
          {itemsProps.map((item, i) => (
            <DownloadListItem
              key={`${i} + ${item.fileName}`}
              fileName={item.fileName}
              httpsLink={item.httpsLink}
              ftpLink={item.ftpLink}
            />
          ))}
        </InfoList>
      </PanelWrapper>
    );
  } else {
    return <></>;
  }
};

const composeItemProps = (
  data: Pick<SearchDetailResponse, "type" | "distribution" | "identifier">
): ItemProps[] => {
  switch (data.type) {
    case dbTypes["jga-dac"]:
      return [];
    case dbTypes.bioproject:
    case dbTypes.biosample:
      //TODO discuss json link path
      return [
        {
          fileName: `${data.identifier}.json`,
          httpsLink: "#TBD",
          ftpLink: null,
        },
      ];
    default:
      return ((data.distribution as { name: string; url: string; ftpUrl?: string }[]) ?? []).map(
        (item) => {
          return {
            fileName: item.name,
            httpsLink: item.url,
            ftpLink: item.ftpUrl ?? null,
          };
        }
      );
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const __TEST__DownloadPanel = { composeItemProps };
