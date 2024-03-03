import { PropsWithChildren } from "react";

export type LocaleKey = "en" | "ja";

export type TailwindElementProps = PropsWithChildren<{
  className?: string;
}>;
