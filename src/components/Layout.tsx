import { FC, PropsWithChildren } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher.tsx";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LanguageSwitcher />
      <main>{children}</main>
    </>
  );
};
