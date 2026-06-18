import { type FC, useMemo } from "react";
import { useTitle } from "@/lib/react/useTitle.ts";
import { type BreadcrumbsPath } from "@/views/shared/components/Breadcrumbs.tsx";
import { GlobalHeader } from "@/views/shared/components/GlobalHeader.tsx";

type Props = {};

export const AboutView: FC<Props> = ({}) => {
  useTitle("About");

  const breadcrumbsPaths: BreadcrumbsPath[] = useMemo(() => {
    return [{ label: "About" }];
  }, []);
  return (
    <main className={"p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <div className={"relative flex items-start gap-4"}>HELLO ABOUT PAGE</div>
    </main>
  );
};
