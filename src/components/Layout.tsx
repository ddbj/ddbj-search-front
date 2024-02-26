import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher.tsx";
import React, { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LanguageSwitcher />
      <main>{children}</main>
    </>
  );
};
