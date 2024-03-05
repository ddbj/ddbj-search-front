import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import parse from "html-react-parser";
import React, { FC, Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ElasticSearchSource } from "@/types/api.ts";
import { TailwindElementProps } from "@/types/types.ts";

type Props = {
  data: ElasticSearchSource;
};

export const DetailTable: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="overflow-hidden bg-white leading-normal shadow sm:rounded-lg ">
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100 [&>*:nth-child(2n)]:bg-gray-50">
            <Row dd={"identifier"}>{data.identifier}</Row>
            <Row dd={"type"}>{data.type}</Row>
            {renderRefs(data.sameAs, "sameAs")}
            {renderUmbrellaProject(data)}
            {renderOrganism(data)}
            {renderTitle(data)}
            {renderDescription(data)}
            {renderOrganization(data)}
            {renderAttributes(data)}
            {renderPublication(data)}
            {renderGrant(data)}
            {renderExternalLinks(data)}
            {renderProperties(data)}
            {renderRefs(data.dbXrefs, "dbXrefs")}
          </dl>
        </div>
      </div>
    </>
  );
};

const renderProperties = (data: ElasticSearchSource) => {
  if (!data.properties) return <></>;
  const properties = JSON.stringify(data.properties, null, 2);
  return (
    <Row dd={"properties"}>
      <div className={"w-full, h-96 overflow-x-auto overflow-y-auto"}>
        <SyntaxHighlighter
          language="json"
          style={atomOneDark}
          wrapLines={true}
          showLineNumbers={true}
        >
          {properties}
        </SyntaxHighlighter>
      </div>
    </Row>
  );
};

const renderExternalLinks = (data: ElasticSearchSource) => {
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

const renderAttributes = (data: ElasticSearchSource) => {
  if (data.type !== "biosample") return <></>;
  const attributes = data.properties.Attributes.Attribute.map((attr) => {
    return (
      <Fragment key={attr.attribute_name}>
        <dt className={"whitespace-nowrap font-medium"}>{attr.attribute_name}</dt>
        <dd>{attr.content}</dd>
      </Fragment>
    );
  });

  return (
    <Row dd={"attributes"}>
      <dl className={"grid grid-cols-min-1fr gap-x-4 gap-y-1 leading-normal"}>{attributes}</dl>
    </Row>
  );
};

const renderGrant = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  const grants = data.properties.Project.Project?.ProjectDescr?.Grant;
  if (!grants) return <></>;
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

const renderPublication = (data: ElasticSearchSource) => {
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

const renderOrganization = (data: ElasticSearchSource) => {
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

const renderDescription = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  return <Row dd={"description"}>{parse(data.description ?? "")}</Row>;
};

const renderTitle = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  return <Row dd={"title"}>{data.properties.Project.Project?.ProjectDescr.Title}</Row>;
};

const renderOrganism = (data: ElasticSearchSource) => {
  const organism = data.organism;
  if (!organism) return <></>;
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

const renderRefs = (refs: ElasticSearchSource["dbXrefs"], key: string) => {
  if (!refs) return <></>;
  const obj = refs.reduce<Record<string, { identifier: string; url: string }[]>>((acc, ref) => {
    if (!acc[ref.type]) acc[ref.type] = [];
    acc[ref.type].push(ref);
    // acc[ref.db] = ref.id;
    return acc;
  }, {});
  const inside = Object.entries(obj)
    .sort(([typeA], [typeB]) => typeA.localeCompare(typeB))
    .map(([type, refs]) => {
      // const linkText =
      return (
        <div className={"flex"} key={type}>
          <dt className={"w-32 shrink-0 grow-0 font-medium"}>{type}</dt>
          <dd className={"flex flex-wrap gap-x-3"}>
            {refs.map((ref) => {
              const isExternal = !ref.url.match(/ddbj.nig.ac.jp\/resource/);
              const linkText = isExternal ? ref.url : `/search/detail/${ref.identifier}`;
              return (
                <LinkText key={ref.identifier} href={linkText} external={isExternal}>
                  {ref.identifier}
                </LinkText>
              );
            })}
          </dd>
        </div>
      );
    });
  return (
    <Row dd={key}>
      <dl className={"flex flex-col gap-3"}>{inside}</dl>
    </Row>
  );
};

const renderUmbrellaProject = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  if (data.properties.Project?.Project?.ProjectType?.ProjectTypeTopAdmin) {
    return <Row dd={"project type"}>Umbrella project</Row>;
  } else {
    return <></>;
  }
};

const Row: FC<TailwindElementProps & { dd: string }> = ({ children, className, dd }) => {
  return (
    <div className={clsx("flex px-2 py-3", className)}>
      <dt className="w-40 shrink-0 grow-0 text-sm font-medium text-gray-900">{dd}</dt>
      <dd className="grow-1 shrink-1 text-sm text-gray-700">{children}</dd>
    </div>
  );
};

const LinkText: FC<
  TailwindElementProps & { href: string; external?: boolean; blank?: boolean }
> = ({ href, children, external = false, blank = false }) => {
  const classNames = clsx("text-primary hover:text-primary-dark", {});
  return external || blank ? (
    <a href={href} className={classNames} target={"_blank"}>
      {children}
    </a>
  ) : (
    <Link to={href} className={classNames}>
      {children}
    </Link>
  );
};
