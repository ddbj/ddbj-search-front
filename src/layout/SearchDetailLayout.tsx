import type { DBType } from "@/consts/db.ts";
import type { FC } from "react";

type Props = {
  entryType: DBType;
};

export const SearchDetailLayout: FC<Props> = ({ entryType }) => {
  return <div>SearchDetailLayout| `${entryType}`</div>;
};
