import React, { FC } from "react";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

type Props = { data: ElasticSearchSource };

export const BioProject: FC<Props> = ({ data }) => {
  if (data.type !== "bioproject") return <></>;
  return (
    <>
      <Organization data={data} />
      {/*<Publication data={data} />*/}
      {/*<Grant data={data} />*/}
      {/*<ExternalLinks data={data} />*/}
    </>
  );
};

export const BioProjectUmbrellaProject: FC<Props> = ({ data }) => {
  if (data.type !== "bioproject") return <></>;
  if (data.properties.Project?.Project?.ProjectType?.ProjectTypeTopAdmin) {
    return <Row dd={"project type"}>Umbrella project</Row>;
  } else {
    return <Row dd={"project type"} />;
  }
};

const Organization: FC<Props> = ({ data }) => {
  if (data.type !== "bioproject") return <></>;
  const organizations = data.organization ?? [];

  const inner = organizations.map((org) => {
    console.log(org);
    return (
      <li key={org.name}>
        {org.url ? (
          <LinkText href={org.url} external={true}>
            {org.name}
          </LinkText>
        ) : (
          <span>{org.name}</span>
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

const Publication: FC<Props> = ({ data }) => {
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

const Grant: FC<Props> = ({ data }) => {
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

const ExternalLinks: FC<Props> = ({ data }) => {
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
