import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { allMessages } from "../intl/allMessages.js";

export const AppIntlProvider = (props: any) => {
  const locale = "ja";
  const messages = useMemo(() => allMessages[locale], [locale]);
  return <IntlProvider locale={locale} messages={messages} {...props} />;
};
