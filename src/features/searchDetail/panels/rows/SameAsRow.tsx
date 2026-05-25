import type { FC } from "react";
import type { Xref } from "@/api/detail/base.ts";
import { XrefLinksRow } from "@/features/searchDetail/panels/rows/XrefLinksRow.tsx";

type Props = { sameAs: Xref[] | null };

export const SameAsRow: FC<Props> = ({ sameAs }) => {
  return <XrefLinksRow term={"Same As"} xrefs={sameAs} />;
};
