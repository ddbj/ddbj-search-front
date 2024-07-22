import { clsx } from "clsx";
import React, { FC, ReactElement, useEffect } from "react";
import { DefinitionList, LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = {
  downloadUrl?: ElasticSearchSource["downloadUrl"];
};

export const DownloadLinks: FC<Props> = ({ downloadUrl }) => {
  const obj = (downloadUrl ?? []).reduce<Record<string, ReactElement>>((acc, value) => {
    const key = value.name;
    acc[key] = <PrefetchedDownloadLinks https={value.url} ftp={value.ftpUrl} id={key} />;
    return acc;
  }, {});
  return (
    <Row dd={"download"}>
      <DefinitionList {...obj} />
    </Row>
  );
};

const PrefetchedDownloadLinks = (props: {
  https: string | undefined;
  ftp: string | undefined;
  id: string;
}) => {
  const { https, ftp, id } = props;
  const inActiveText = clsx("text-gray-400 hover:text-gray-400");
  const [isActive, setActive] = React.useState(true);
  useEffect(() => {
    if (!https) return;
    const targetHost = new URL(https).host;
    const currentHost = window.location.host;
    if (targetHost === currentHost) {
      fetch(https, { method: "HEAD" }).then((res) => {
        if (res.ok) {
          setActive(true);
        } else {
          setActive(false);
        }
      });
    } else {
      setActive(true);
      console.warn("target host is different from current host. So prefetch is skipped.");
    }
  }, [https]);
  return (
    <p className={"flex gap-x-2"}>
      {https ? (
        <LinkText href={https} external={true} className={isActive ? "" : inActiveText}>
          HTTPS
        </LinkText>
      ) : (
        <></>
      )}
      {ftp ? (
        <LinkText href={ftp} external={true} className={isActive ? "" : inActiveText}>
          FTP
        </LinkText>
      ) : (
        <></>
      )}
    </p>
  );
};
