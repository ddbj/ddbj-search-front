import { allMessages } from "../src/intl/allMessages";

const locales = ["en", "ja"];

const messages = allMessages;

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: "en",
  locales,
  messages,
  formats,
};
