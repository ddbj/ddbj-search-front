import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LocaleKey } from "@/types.ts";

export const usePathLocale = () => {
  const routerState = useRouterState();
  const [locale, setLocale] = useState<LocaleKey>("ja");
  useEffect(() => {
    const pathLocale = routerState.location.pathname.split("/")[2];
    setLocale(pathLocale === "en" ? "en" : "ja");
  }, [routerState.location.pathname]);
  return locale;
};
