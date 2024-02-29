import { useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import { FC, useEffect } from "react";
import { SearchResource } from "@/components/search/SearchResource.tsx";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher.tsx";
import { LocaleKey } from "@/types.ts";

type Props = {};

export const IndexPage: FC<Props> = ({}) => {
  const navigate = useNavigate();
  const state = useRouterState();
  const isEn = state.location.pathname.split("/")[2] === "en";
  const defaultLocale = isEn ? "en" : "ja";

  const onChangeLocale = (locale: LocaleKey) => {
    navigate({ to: locale === "ja" ? "/search" : "/search/en" }).then(() => {});
  };

  return (
    <main>
      <LocaleSwitcher onChangeLocale={onChangeLocale} defaultLocale={defaultLocale} />
      <SearchResource />
    </main>
  );
};
