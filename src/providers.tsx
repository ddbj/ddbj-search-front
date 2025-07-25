import { HeroUIProvider } from "@heroui/react";
import { Provider } from "jotai";
import type { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeroUIProvider>
      <Provider>{children}</Provider>
    </HeroUIProvider>
  );
};
