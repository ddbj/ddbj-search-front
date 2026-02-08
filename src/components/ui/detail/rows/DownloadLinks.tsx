import { FC } from "react";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = {
  data: ElasticSearchSource;
};

export const DownloadLinks: FC<Props> = ({ data }) => {
  const links = data.distribution ?? [];
  if (links.length === 0) return <></>;

  return (
    <Row dd={"download"}>
      <p className={"flex gap-x-2"}>
        {links.map((dist) => (
          <LinkText key={dist.encodingFormat} href={dist.contentUrl} external={true}>
            {dist.encodingFormat}
          </LinkText>
        ))}
      </p>
    </Row>
  );
};
