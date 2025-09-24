import type { FC } from "react";

type Props = { fileName: string; httpsLink?: string; ftpLink?: string };

export const DownloadListItem: FC<Props> = ({ fileName, httpsLink, ftpLink }) => {
  return (
    <li className={"flex flex-col bg-white py-2"}>
      <span>{fileName}</span>
      <span className={"flex gap-2"}>
        {httpsLink && (
          <a href={httpsLink} className={"text-link-primary"}>
            HTTPS
          </a>
        )}
        {ftpLink && (
          <a href={ftpLink} className={"text-link-primary"}>
            FTP
          </a>
        )}
      </span>
    </li>
  );
};
