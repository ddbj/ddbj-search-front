import { type FC, useMemo } from "react";
import type { BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import { useTitle } from "@/utils/useTitle.ts";

type Props = {};

export const StatusPage: FC<Props> = () => {
  useTitle("Status");
  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    return [{ label: "Status" }];
  }, []);
  return (
    <main className={"p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"relative flex items-start gap-4"}>HELLO Status PAGE</div>
    </main>
  );
};
