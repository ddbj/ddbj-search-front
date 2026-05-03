import { Modal } from "@heroui/react";
import type { FC } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PrettyJSON } from "@/features/searchDetail/ui/PrettyJSON.tsx";

type Props = {
  data: unknown;
};

export const PropertiesRow: FC<Props> = ({ data }) => {
  const properties = JSON.stringify(data, null, 2);

  return (
    <>
      <InfoListItem term={"Properties"}>PropertiesRow</InfoListItem>
      <Modal.Backdrop isOpen={false}>
        <Modal.Container>
          <Modal.Dialog className={"w-full overflow-hidden rounded-md p-0"}>
            <PrettyJSON code={properties} forceExpand={true} />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};
