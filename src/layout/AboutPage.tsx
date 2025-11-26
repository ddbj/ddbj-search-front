import { type FC, useMemo } from "react";
import { type BreadcrumbsPath } from "@/features/shared/Breadcrumbs.tsx";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";

type Props = {};

export const AboutPage: FC<Props> = ({}) => {
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
