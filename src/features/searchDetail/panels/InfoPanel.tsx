import { AttributeRow, getAttributes } from "@/features/searchDetail/panels/rows/AttributeRow.tsx";
import {
  ExternalLinksRow,
  getExternalLinks,
} from "@/features/searchDetail/panels/rows/ExternalLinksRow.tsx";
import { getGrants, GrantsRow } from "@/features/searchDetail/panels/rows/GrantsRow.tsx";
import { OrganismRow } from "@/features/searchDetail/panels/rows/OrganismRow.tsx";
import {
  getOrganizations,
  OrganizationsRow,
} from "@/features/searchDetail/panels/rows/OrganizationsRow.tsx";
import {
  getPublications,
  PublicationsRow,
} from "@/features/searchDetail/panels/rows/PublicationsRow.tsx";
import { getSameAs, SameAsRow } from "@/features/searchDetail/panels/rows/SameAsRow.tsx";
import { SanitizedRow } from "@/features/searchDetail/panels/rows/SanitizedRow.tsx";
import { InfoList } from "@/features/searchDetail/ui/InfoList.tsx";
import { PanelWrapper } from "@/features/searchDetail/ui/PanelWrapper.tsx";
import type { SearchDetailResponse } from "@/utils/searchDetailResponse.ts";
import type { FC } from "react";

type Props = { data: SearchDetailResponse };

export const InfoPanel: FC<Props> = ({ data }) => {
  return (
    <PanelWrapper>
      <InfoList>
        <SanitizedRow term={"Title"} value={data.title} />
        <SanitizedRow term={"Name"} value={data.name} />
        <SanitizedRow term={"Description"} value={data.description} />
        <OrganismRow organism={data.organism} />
        <PublicationsRow publications={getPublications(data)} />
        <GrantsRow grants={getGrants(data)} />
        <OrganizationsRow organizations={getOrganizations(data)} />
        <ExternalLinksRow externalLinks={getExternalLinks(data)} />
        <SameAsRow sameAs={getSameAs(data)} />
        <AttributeRow attributes={getAttributes(data)} />
      </InfoList>
    </PanelWrapper>
  );
};
