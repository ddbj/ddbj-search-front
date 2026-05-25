import type { FC } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { normalizeDetailMetadataRows, type DetailMetadataRow } from "./detailMetadataRowUtils.ts";
import { XrefLinksRow } from "./XrefLinksRow.tsx";

type Props = {
  rows: DetailMetadataRow[];
};

export const DetailMetadataRows: FC<Props> = ({ rows }) => {
  const displayableRows = normalizeDetailMetadataRows(rows);

  return (
    <>
      {displayableRows.map((row, index) => {
        if (row.kind === "xrefs") {
          return <XrefLinksRow key={`${row.term}-${index}`} term={row.term} xrefs={row.value} />;
        }

        return (
          <InfoListItem key={`${row.term}-${index}`} term={row.term}>
            {row.value}
          </InfoListItem>
        );
      })}
    </>
  );
};
