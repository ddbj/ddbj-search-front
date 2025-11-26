import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import type { FC, PropsWithChildren } from "react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>{children}</Provider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
};
