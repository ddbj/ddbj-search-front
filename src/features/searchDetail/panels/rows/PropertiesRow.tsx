import { Button, Modal } from "@heroui/react";
import clsx from "clsx";
import { type FC, useState } from "react";
import { CircleCloseIcon } from "@/features/graphics/CircleCloseIcon.tsx";
import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import { PrettyJSON } from "@/features/searchDetail/ui/PrettyJSON.tsx";

type Props = {
  data: unknown;
};

const buttonClasses = clsx(
  "border-link-primary text-link-primary h-8 rounded-lg px-3 py-0",
  "hover:border-link-primary-hover hover:text-link-primary hover:bg-transparent",
);

export const PropertiesRow: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const properties = JSON.stringify(data, null, 2);

  return (
    <>
      <InfoListItem term={"Properties"} verticalAlign="center">
        <Button
          type={"button"}
          variant={"outline"}
          className={buttonClasses}
          onPress={() => setIsOpen(true)}
        >
          Open Properties
        </Button>
      </InfoListItem>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container className={"w-full sm:w-full"}>
          <Modal.Dialog
            aria-label={"Properties"}
            className={"w-full max-w-none overflow-hidden rounded-md p-0"}
          >
            <PrettyJSON
              additionalActions={[
                {
                  Icon: CircleCloseIcon,
                  label: "Close Properties",
                  onPress: () => setIsOpen(false),
                },
              ]}
              code={properties}
              forceExpand={true}
              initialHeight={"calc(100dvh - 10rem)"}
              maxExpandedHeight={"calc(100dvh - 10rem)"}
            />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </>
  );
};
