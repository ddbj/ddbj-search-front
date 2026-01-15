import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import { PrettyJSON } from "@/features/searchDetail/ui/PrettyJSON.tsx";
import type { FC } from "react";

type Props = { data: unknown };

const MAX_LINES_FOR_HIGHLIGHTER = 10_000;

export const PropertiesPanel: FC<Props> = ({ data }) => {
  const properties = JSON.stringify(data, null, 2);
  const lineLength = properties.match(/\n/g)?.length ?? 0;
  const useHighlighter = lineLength <= MAX_LINES_FOR_HIGHLIGHTER;
  return (
    <PanelWrapper className={"gap-y-2 pb-4"}>
      <div className={"pt-2 text-sm font-bold"}>Properties</div>
      {/*<div className={"h-36 rounded-sm bg-gray-800"}></div>*/}
      <PrettyJSON code={properties} useHighlighter={useHighlighter} />
    </PanelWrapper>
  );
};
