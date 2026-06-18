import type { FC } from "react";
import { detailFieldLabels } from "@/consts/entryDisplayLabels.ts";
import { sanitizeHTML } from "@/lib/sanitizing/sanitizeHTML.ts";
import type { SearchDetailResponse } from "@/schema/api/types.ts";
import { ExternalLinksRow as ExternalLinksValueRow } from "@/views/searchDetail/components/panels/rows/ExternalLinksRow.tsx";
import { GrantsRow as GrantsValueRow } from "@/views/searchDetail/components/panels/rows/GrantsRow.tsx";
import { OrganismRow as OrganismValueRow } from "@/views/searchDetail/components/panels/rows/OrganismRow.tsx";
import { OrganizationsRow as OrganizationsValueRow } from "@/views/searchDetail/components/panels/rows/OrganizationsRow.tsx";
import { PublicationsRow as PublicationsValueRow } from "@/views/searchDetail/components/panels/rows/PublicationsRow.tsx";
import { SanitizedRow } from "@/views/searchDetail/components/panels/rows/SanitizedRow.tsx";
import { StringArrayInfoRow } from "@/views/searchDetail/components/panels/rows/StringArrayInfoRow.tsx";
import { XrefLinksRow } from "@/views/searchDetail/components/panels/rows/XrefLinksRow.tsx";
import { InfoList } from "@/views/searchDetail/components/ui/InfoList.tsx";
import { InfoListItem } from "@/views/searchDetail/components/ui/InfoListItem.tsx";
import { PanelWrapper } from "@/views/searchDetail/components/ui/PanelWrapper.tsx";

type Props = { data: SearchDetailResponse };

export const InfoPanel: FC<Props> = ({ data }) => {
  return (
    <PanelWrapper>
      <InfoList>
        <TitleRow data={data} />
        <NameRow data={data} />
        <DescriptionRow data={data} />
        <OrganismRow data={data} />
        <PublicationsRow data={data} />
        <GrantsRow data={data} />
        <OrganizationsRow data={data} />
        <ExternalLinksRow data={data} />
        <SameAsRow data={data} />
        <ProjectTypeRow data={data} />
        <RelevanceRow data={data} />
        <ModelRow data={data} />
        <PackageRow data={data} />
        <CollectionDateRow data={data} />
        <GeographicLocationRow data={data} />
        <StrainRow data={data} />
        <HostRow data={data} />
        <IsolateRow data={data} />
        <DerivedFromRow data={data} />
        <StudyTypeRow data={data} />
        <ExperimentTypeRow data={data} />
        <SubmissionTypeRow data={data} />
        <InstrumentModelRow data={data} />
        <PlatformRow data={data} />
        <LibraryLayoutRow data={data} />
        <LibrarySelectionRow data={data} />
        <LibrarySourceRow data={data} />
        <LibraryStrategyRow data={data} />
        <LibraryNameRow data={data} />
        <LibraryConstructionProtocolRow data={data} />
        <AnalysisTypeRow data={data} />
        <DatasetTypeRow data={data} />
        <VendorRow data={data} />
      </InfoList>
    </PanelWrapper>
  );
};

type DetailRowProps = { data: SearchDetailResponse };

const TitleRow: FC<DetailRowProps> = ({ data }) => {
  return <SanitizedRow term={detailFieldLabels.title} value={data.title} />;
};

const NameRow: FC<DetailRowProps> = ({ data }) => {
  return <SanitizedRow term={detailFieldLabels.name} value={data.name} />;
};

const DescriptionRow: FC<DetailRowProps> = ({ data }) => {
  return <SanitizedRow term={detailFieldLabels.description} value={data.description} />;
};

const OrganismRow: FC<DetailRowProps> = ({ data }) => {
  if (!data.organism) {
    return null;
  }

  return <OrganismValueRow organism={data.organism} />;
};

const ProjectTypeRow: FC<DetailRowProps> = ({ data }) => {
  if (!("projectType" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.projectType} value={data.projectType} />;
};

const RelevanceRow: FC<DetailRowProps> = ({ data }) => {
  if (!("relevance" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.relevance} value={data.relevance} />;
};

const ModelRow: FC<DetailRowProps> = ({ data }) => {
  if (!("model" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.model} value={data.model} />;
};

const PackageRow: FC<DetailRowProps> = ({ data }) => {
  if (!("package" in data) || !data.package) {
    return null;
  }

  const displayName = sanitizeHTML(data.package.displayName?.trim());
  const name = sanitizeHTML(data.package.name?.trim());

  if (!displayName && !name) {
    return null;
  }

  const displayValue = displayName && name ? `${displayName} (${name})` : displayName || name;

  return <InfoListItem term={detailFieldLabels.package}>{displayValue}</InfoListItem>;
};

const CollectionDateRow: FC<DetailRowProps> = ({ data }) => {
  if (!("collectionDate" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.collectionDate} value={data.collectionDate} />;
};

const GeographicLocationRow: FC<DetailRowProps> = ({ data }) => {
  if (!("geoLocName" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.geoLocName} value={data.geoLocName} />;
};

const StrainRow: FC<DetailRowProps> = ({ data }) => {
  if (!("strain" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.strain} value={data.strain} />;
};

const HostRow: FC<DetailRowProps> = ({ data }) => {
  if (!("host" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.host} value={data.host} />;
};

const IsolateRow: FC<DetailRowProps> = ({ data }) => {
  if (!("isolate" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.isolate} value={data.isolate} />;
};

const DerivedFromRow: FC<DetailRowProps> = ({ data }) => {
  if (!("derivedFrom" in data) || !data.derivedFrom || data.derivedFrom.length === 0) {
    return null;
  }

  return <XrefLinksRow term={detailFieldLabels.derivedFrom} xrefs={data.derivedFrom} />;
};

const StudyTypeRow: FC<DetailRowProps> = ({ data }) => {
  if (!("studyType" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.studyType} value={data.studyType} />;
};

const ExperimentTypeRow: FC<DetailRowProps> = ({ data }) => {
  if (!("experimentType" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.experimentType} value={data.experimentType} />;
};

const SubmissionTypeRow: FC<DetailRowProps> = ({ data }) => {
  if (!("submissionType" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.submissionType} value={data.submissionType} />;
};

const InstrumentModelRow: FC<DetailRowProps> = ({ data }) => {
  if (!("instrumentModel" in data)) {
    return null;
  }

  return (
    <StringArrayInfoRow term={detailFieldLabels.instrumentModel} value={data.instrumentModel} />
  );
};

const PlatformRow: FC<DetailRowProps> = ({ data }) => {
  if (!("platform" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.platform} value={data.platform} />;
};

const LibraryLayoutRow: FC<DetailRowProps> = ({ data }) => {
  if (!("libraryLayout" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.libraryLayout} value={data.libraryLayout} />;
};

const LibrarySelectionRow: FC<DetailRowProps> = ({ data }) => {
  if (!("librarySelection" in data)) {
    return null;
  }

  return (
    <StringArrayInfoRow term={detailFieldLabels.librarySelection} value={data.librarySelection} />
  );
};

const LibrarySourceRow: FC<DetailRowProps> = ({ data }) => {
  if (!("librarySource" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.librarySource} value={data.librarySource} />;
};

const LibraryStrategyRow: FC<DetailRowProps> = ({ data }) => {
  if (!("libraryStrategy" in data)) {
    return null;
  }

  return (
    <StringArrayInfoRow term={detailFieldLabels.libraryStrategy} value={data.libraryStrategy} />
  );
};

const LibraryNameRow: FC<DetailRowProps> = ({ data }) => {
  if (!("libraryName" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.libraryName} value={data.libraryName} />;
};

const LibraryConstructionProtocolRow: FC<DetailRowProps> = ({ data }) => {
  if (!("libraryConstructionProtocol" in data)) {
    return null;
  }

  return (
    <SanitizedRow
      term={detailFieldLabels.libraryConstructionProtocol}
      value={data.libraryConstructionProtocol}
    />
  );
};

const AnalysisTypeRow: FC<DetailRowProps> = ({ data }) => {
  if (!("analysisType" in data)) {
    return null;
  }

  return <SanitizedRow term={detailFieldLabels.analysisType} value={data.analysisType} />;
};

const DatasetTypeRow: FC<DetailRowProps> = ({ data }) => {
  if (!("datasetType" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.datasetType} value={data.datasetType} />;
};

const VendorRow: FC<DetailRowProps> = ({ data }) => {
  if (!("vendor" in data)) {
    return null;
  }

  return <StringArrayInfoRow term={detailFieldLabels.vendor} value={data.vendor} />;
};

const PublicationsRow: FC<DetailRowProps> = ({ data }) => {
  if (!data.publication || data.publication.length === 0) {
    return null;
  }

  return <PublicationsValueRow publications={data.publication} />;
};

const GrantsRow: FC<DetailRowProps> = ({ data }) => {
  if (!data.grant || data.grant.length === 0) {
    return null;
  }

  return <GrantsValueRow grants={data.grant} />;
};

const OrganizationsRow: FC<DetailRowProps> = ({ data }) => {
  if (!data.organization || data.organization.length === 0) {
    return null;
  }

  return <OrganizationsValueRow organizations={data.organization} />;
};

const ExternalLinksRow: FC<DetailRowProps> = ({ data }) => {
  if (!data.externalLink || data.externalLink.length === 0) {
    return null;
  }

  return <ExternalLinksValueRow externalLinks={data.externalLink} />;
};

const SameAsRow: FC<DetailRowProps> = ({ data }) => {
  if (!data.sameAs || data.sameAs.length === 0) {
    return null;
  }

  return <XrefLinksRow term={detailFieldLabels.sameAs} xrefs={data.sameAs} />;
};
