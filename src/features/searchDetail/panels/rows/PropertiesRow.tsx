import { Modal, Button } from "@heroui/react";
import type { FC } from "react";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";

type Props = {
  data: unknown;
  tooltipOpen?: boolean;
};

export const PropertiesRow: FC<Props> = ({ data }) => (
  <>
    <InfoListItem term={"Properties"}>PropertiesRow</InfoListItem>
    <Modal.Backdrop isOpen={true}>
      <Modal.Container></Modal.Container>
    </Modal.Backdrop>
  </>
);
