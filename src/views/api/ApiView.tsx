import { ApiReferenceReact } from "@scalar/api-reference-react";
import type { FC } from "react";
import { getDocs } from "@/api/openapi.ts";
import { GlobalHeader } from "@/views/shared/components/GlobalHeader.tsx";

type Props = {};
const breadcrumbsPaths = [{ label: "API" }];
export const ApiView: FC<Props> = () => {
  return (
    <main className={"flex flex-col gap-4 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <ApiReferenceReact
        configuration={{
          content: getDocs(),
          orderSchemaPropertiesBy: "preserve",
          darkMode: false,
          forceDarkModeState: "light",
          hideDarkModeToggle: true,
          showDeveloperTools: "never",
          mcp: {
            disabled: true,
          },
          agent: {
            disabled: true,
          },
        }}
      />
    </main>
  );
};
