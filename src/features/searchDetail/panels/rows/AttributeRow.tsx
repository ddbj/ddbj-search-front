import { InfoListItem } from "@/features/searchDetail/ui/InfoListItem.tsx";
import type { Attribute } from "@/api/detail/bioSample.ts";
import type { SearchDetailResponse } from "@/api/types.ts";
import type { FC } from "react";

type Props = { attributes: Attribute[] | null };

export const AttributeRow: FC<Props> = ({ attributes }) => {
  if (!attributes || attributes.length === 0) {
    return <></>;
  }
  return (
    <InfoListItem term={"Attributes"}>
      <dl className={"grid grid-cols-[auto_1fr] gap-x-3"}>
        {attributes.map((attr) => {
          const term: string =
            attr.display_name || attr.attribute_name || attr.harmonized_name || "";
          return (
            <>
              <dt>{term}</dt>
              <dd>{attr.content}</dd>
            </>
          );
        })}
      </dl>
    </InfoListItem>
  );
};

export const getAttributes = (res: SearchDetailResponse) => {
  if (res.type === "biosample") {
    return res.attributes;
  } else {
    return null;
  }
};
