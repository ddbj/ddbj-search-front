import parse from "html-react-parser";
import React, { FC } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { DownloadLinks } from "@/components/ui/detail/rows/DownloadLinks.tsx";
import { Properties } from "@/components/ui/detail/rows/Properties.tsx";
import { RefLinks } from "@/components/ui/detail/rows/RefLinks.tsx";
import { DefinitionList, LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { SraExperiment } from "@/components/ui/detail/rows/SraExperiment.tsx";
import { SraSample } from "@/components/ui/detail/rows/SraSample.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

SyntaxHighlighter.registerLanguage("json", json);

type Props = {
  data: ElasticSearchSource;
};

export const DetailTable: FC<Props> = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div className="overflow-hidden bg-white leading-normal shadow sm:rounded-lg ">
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100 [&>*:nth-child(2n)]:bg-gray-50">
            <Row dd={"identifier"}>{data.identifier}</Row>
            <Row dd={"type"}>{data.type}</Row>
            <RefLinks refs={data.sameAs} title={"sameAs"} />
            {/*TODO: organize row order*/}
            {renderBioProjectUmbrellaProject(data)}
            {renderOrganism(data)}
            {renderBioProjectTitle(data)}
            {renderBioProjectDescription(data)}
            {renderBioProjectOrganization(data)}
            {renderBioProjectPublication(data)}
            {renderBioProjectGrant(data)}
            {renderBioProjectExternalLinks(data)}
            {renderBioSampleAttributes(data)}
            <SraSample data={data} />
            {renderSraExperimentTitle(data)}
            <SraExperiment data={data} />
            <Properties title={"properties"} codeObj={data.properties} />
            <RefLinks refs={data.dbXrefs} title={"dbXrefs"} />
            {/*{renderDistribution(data)}*/}
            <DownloadLinks downloadUrl={data.downloadUrl} />
            <Row dd={"status"}>{data.status}</Row>
            <Row dd={"visibility"}>{data.visibility}</Row>
            <Row dd={"dateCreated"}>{data.dateCreated}</Row>
            <Row dd={"dateModified"}>{data.dateModified}</Row>
            <Row dd={"datePublished"}>{data.datePublished}</Row>
          </dl>
        </div>
      </div>
    </>
  );
};

const renderDistribution = (data: ElasticSearchSource) => {
  return (
    <Row dd={"distribution"}>
      <p className={"flex gap-x-2"}>
        {data.distribution.map((dist) => (
          <LinkText key={dist.encodingFormat} href={dist.contentUrl} external={true}>
            {dist.encodingFormat}
          </LinkText>
        ))}
      </p>
    </Row>
  );
};

const renderSraExperimentTitle = (data: ElasticSearchSource) => {
  if (data.type !== "sra-experiment") return <></>;
  return <Row dd={"title"}>{data.properties.TITLE ?? ""}</Row>;
};

const renderBioProjectExternalLinks = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  const externalLinks = data.properties.Project.Project?.ProjectDescr.ExternalLink ?? [];
  const inner = externalLinks.map((link) => {
    const title = link.label ?? link.URL;
    return (
      <li key={link.URL}>
        <LinkText href={link.URL} external={true}>
          {title}
        </LinkText>
      </li>
    );
  });
  return (
    <Row dd={"external link"}>
      <ul className={"flex flex-col gap-3"}>{inner}</ul>
    </Row>
  );
};

const renderBioSampleAttributes = (data: ElasticSearchSource) => {
  if (data.type !== "biosample") return <></>;
  const attributes = data.properties.Attributes?.Attribute ?? [];
  const obj = attributes.reduce<Record<string, string>>((acc, attr) => {
    acc[attr.attribute_name] = attr.content;
    return acc;
  }, {});
  return (
    <Row dd={"attributes"}>
      <DefinitionList {...obj} />
    </Row>
  );
};

const renderBioProjectGrant = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  const grants = data.properties.Project.Project?.ProjectDescr?.Grant;
  if (!grants) return <Row dd={"grant"} />;
  const inner = grants.map((grant) => {
    const title = grant.Title ?? grant.GrantId;
    return (
      <li key={grant.GrantId}>
        {title} by {grant.Agency.content}
      </li>
    );
  });
  return (
    <Row dd={"grant"}>
      <ul>{inner}</ul>
    </Row>
  );
};

const renderBioProjectPublication = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  const publications = data.properties.Project.Project?.ProjectDescr.Publication ?? [];
  const inner = publications.map((pub) => {
    const title = pub.StructuredCitation?.Title ?? pub.Reference;
    return (
      <li key={pub.id}>
        <LinkText href={`https://pubmed.ncbi.nlm.nih.gov/${pub.id}`} external={true}>
          {title}
        </LinkText>
      </li>
    );
  });
  return (
    <Row dd={"publication"}>
      <ul className={"flex flex-col gap-3"}>{inner}</ul>
    </Row>
  );
};

const renderBioProjectOrganization = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  const organization = data.properties.Project.Submission?.Description?.Organization ?? [];
  const inner = organization.map((org) => {
    return (
      <li key={org.Name.content}>
        {org.url ? (
          <LinkText href={org.url} external={true}>
            {org.Name.content}
          </LinkText>
        ) : (
          <span>{org.Name.content}</span>
        )}
      </li>
    );
  });

  return (
    <Row dd={"organization"}>
      <ul>{inner}</ul>
    </Row>
  );
};

const renderBioProjectDescription = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  return <Row dd={"description"}>{parse(data.description ?? "")}</Row>;
};

const renderBioProjectTitle = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  return <Row dd={"title"}>{data.properties.Project.Project?.ProjectDescr?.Title}</Row>;
};

const renderOrganism = (data: ElasticSearchSource) => {
  const organism = data.organism;
  if (!organism) return <Row dd={"organism"} />;
  const label = organism.name ?? organism.identifier;
  return (
    <Row dd={"organism"}>
      <LinkText
        href={`https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=${organism.identifier}`}
        external={true}
      >
        {label}
      </LinkText>
    </Row>
  );
};

const renderBioProjectUmbrellaProject = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  if (data.properties.Project?.Project?.ProjectType?.ProjectTypeTopAdmin) {
    return <Row dd={"project type"}>Umbrella project</Row>;
  } else {
    return <Row dd={"project type"} />;
  }
};
