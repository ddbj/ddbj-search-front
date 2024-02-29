import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { allMessages } from "../intl/allMessages.js";
import { usePathLocale } from "@/hooks/usePathLocale.ts";

export const AppIntlProvider = (props: any) => {
  const locale = usePathLocale();
  const messages = useMemo(() => allMessages[locale], [locale]);
  return <IntlProvider locale={locale} messages={messages} {...props} />;
};
