import { Modal, Button } from "@heroui/react";
import type { FC } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PrettyJSON } from "@/features/searchDetail/ui/PrettyJSON.tsx";

const MAX_LINES_FOR_HIGHLIGHTER = 10_000;
type Props = {
  data: unknown;
  tooltipOpen?: boolean;
};

export const PropertiesRow: FC<Props> = ({ data }) => {
  const properties = JSON.stringify(data, null, 2);
  const lineLength = properties.match(/\n/g)?.length ?? 0;
  const useHighlighter = lineLength <= MAX_LINES_FOR_HIGHLIGHTER;

  return (
    <>
      <InfoListItem term={"Properties"}>PropertiesRow</InfoListItem>
      <Modal.Backdrop isOpen={false}>
        <Modal.Container>
          <Modal.Dialog className={"w-full overflow-hidden rounded-md p-0"}>
            <PrettyJSON code={properties} useHighlighter={useHighlighter} forceExpand={true} />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};
