import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LocaleKey } from "@/types/types.ts";

export const usePathLocale = () => {
  const routerState = useRouterState();
  const [locale, setLocale] = useState<LocaleKey>("ja");
  return locale;
};
