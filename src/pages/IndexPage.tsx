import { FC } from "react";
import { SearchResource } from "@/components/search/SearchResource.tsx";
import { useTitle } from "@/hooks/useTitle.ts";

type Props = {};

export const IndexPage: FC<Props> = ({}) => {
  useTitle();
  return (
    <main>
      <SearchResource />
    </main>
  );
};
