import { ApiReferenceReact } from "@scalar/api-reference-react";
import { getDocs } from "@/api/openapi.ts";
import { GlobalHeader } from "@/features/shared/GlobalHeader.tsx";
import type { FC } from "react";

type Props = {};
const breadcrumbsPaths = [{ label: "API" }];
export const ApiPage: FC<Props> = () => {
  return (
    <main className={"flex flex-col gap-4 p-8 pb-16 shadow-lg"}>
      <GlobalHeader breadcrumbsPaths={breadcrumbsPaths} />
      <ApiReferenceReact
        configuration={{
          content: getDocs(),
          orderSchemaPropertiesBy: "preserve",
        }}
      />
    </main>
  );
};
