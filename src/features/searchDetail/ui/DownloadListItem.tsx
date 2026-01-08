import { clsx } from "clsx";
import { type FC, useEffect, useState } from "react";
import { safeParseUrl } from "@/utils/safeParseUrl.ts";
import { sleep } from "@/utils/sleep.ts";

type Props = { fileName: string; httpsLink: string | null; ftpLink: string | null };

const linkClassNames = clsx("text-link-primary");
const inActiveClassNames = clsx("text-gray-500");
export const DownloadListItem: FC<Props> = ({ fileName, httpsLink, ftpLink }) => {
  const { isActive } = usePrefetchLinkCheck({ httpsLink });

  return (
    <li className={"flex flex-col bg-white py-2"}>
      <span>{fileName}</span>
      <span className={"flex gap-2"}>
        {isActive ? (
          <>
            {httpsLink && (
              <a href={httpsLink} className={linkClassNames} target={"_blank"}>
                HTTPS
              </a>
            )}
            {ftpLink && (
              <a href={ftpLink} className={linkClassNames} target={"_blank"}>
                FTP
              </a>
            )}
          </>
        ) : (
          <>
            {httpsLink && <span className={inActiveClassNames}>HTTPS</span>}
            {ftpLink && <span className={inActiveClassNames}>FTP</span>}
          </>
        )}
      </span>
    </li>
  );
};

const usePrefetchLinkCheck = ({ httpsLink }: { httpsLink: string | null }) => {
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    if (!httpsLink) return;
    const targetHost = safeParseUrl(httpsLink)?.host;
    const currentHost = window.location.host;
    if (targetHost === currentHost) {
      fetch(httpsLink, { method: "HEAD" }).then((res) => {
        if (!res.ok) {
          setActive(false);
        }
      });
    } else {
      console.warn("target host is different from current host. So prefetch is skipped.");
    }
  }, [httpsLink]);
  return { isActive };
};
