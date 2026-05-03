import { Modal } from "@heroui/react";
import { type FC, useState } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PrettyJSON } from "@/features/searchDetail/ui/PrettyJSON.tsx";

type Props = {
  data: unknown;
};

export const PropertiesRow: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const properties = JSON.stringify(data, null, 2);

  return (
    <>
      <InfoListItem term={"Properties"}>
        <button
          type={"button"}
          className={"text-link-primary cursor-pointer"}
          onClick={() => setIsOpen(true)}
        >
          Open Properties
        </button>
      </InfoListItem>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container className={"w-full sm:w-full"}>
          <Modal.Dialog
            aria-label={"Properties"}
            className={"w-full max-w-none overflow-hidden rounded-md p-0"}
          >
            <PrettyJSON
              code={properties}
              forceExpand={true}
              initialHeight={"calc(100dvh - 5rem)"}
              maxExpandedHeight={"calc(100dvh - 5rem)"}
            />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};
