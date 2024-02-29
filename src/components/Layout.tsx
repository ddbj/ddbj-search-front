import { FC, PropsWithChildren } from "react";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher.tsx";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LocaleSwitcher />
      <main>{children}</main>
    </>
  );
};
