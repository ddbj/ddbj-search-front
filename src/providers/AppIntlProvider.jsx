import { IntlProvider } from 'react-intl';
import allMessages from '../intl';
import {useMemo} from "react";
export const AppIntlProvider = (props) => {
  const locale = "ja"
  const messages = useMemo(() => allMessages[locale], [locale]);
  return <IntlProvider locale={locale} messages={messages} {...props} />;
}
