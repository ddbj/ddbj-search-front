import { FC } from "react";
import { SearchResource } from "@/components/search/SearchResource.tsx";

type Props = {};

export const IndexPage: FC<Props> = ({}) => {
  return (
    <main>
      <SearchResource />
    </main>
  );
};
