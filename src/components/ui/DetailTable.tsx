import { Link } from "@tanstack/react-router";
import { clsx } from "clsx";
import parse from "html-react-parser";
import React, { FC, Fragment, ReactElement } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ElasticSearchSource } from "@/types/api.ts";
import { TailwindElementProps } from "@/types/types.ts";

SyntaxHighlighter.registerLanguage("json", json);

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
            {renderBioProjectUmbrellaProject(data)}
            {renderOrganism(data)}
            {renderBioProjectTitle(data)}
            {renderBioProjectDescription(data)}
            {renderBioProjectOrganization(data)}
            {renderBioProjectPublication(data)}
            {renderBioProjectGrant(data)}
            {renderBioProjectExternalLinks(data)}
            {renderBioSampleAttributes(data)}
            {renderSraSampleAttributes(data)}
            {renderSraExperimentTitle(data)}
            {renderSraExperimentDesign(data)}
            {renderSraExperimentPlatform(data)}
            {renderProperties(data)}
            {renderRefs(data.dbXrefs, "dbXrefs")}
            {renderDistribution(data)}
            {renderDownload(data)}
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

const renderDownload = (data: ElasticSearchSource) => {
  const obj = (data.downloadUrl ?? []).reduce<Record<string, ReactElement>>((acc, value) => {
    const key = value.name;
    acc[key] = (
      <p className={"flex gap-x-2"}>
        {value.url ? (
          <LinkText href={value.url} external={true}>
            HTTPS
          </LinkText>
        ) : (
          <></>
        )}
        {value.ftpUrl ? (
          <LinkText href={value.ftpUrl} external={true}>
            FTP
          </LinkText>
        ) : (
          <></>
        )}
      </p>
    );
    return acc;
  }, {});
  return (
    <Row dd={"download"}>
      <DefinitionList {...obj} />
    </Row>
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

const renderSraExperimentDesign = (data: ElasticSearchSource) => {
  if (data.type !== "sra-experiment") return <></>;
  const descriptor = JSON.stringify(data.properties.DESIGN.LIBRARY_DESCRIPTOR ?? "", null, 2);
  return (
    <Row dd={"library descriptor"}>
      <PrettyJSON code={descriptor} />
    </Row>
  );
};

const renderSraExperimentPlatform = (data: ElasticSearchSource) => {
  if (data.type !== "sra-experiment") return <></>;
  const platform = data.properties.PLATFORM ?? {};
  const obj = Object.entries(platform).reduce<Record<string, string>>((acc, [key, value]) => {
    acc[key] = value.INSTRUMENT_MODEL ?? "";
    return acc;
  }, {});
  return (
    <Row dd={"platform"}>
      <DefinitionList {...obj} />
    </Row>
  );
};

const renderProperties = (data: ElasticSearchSource) => {
  if (!data.properties) return <Row dd={"properties"} />;
  const properties = JSON.stringify(data.properties, null, 2);
  return (
    <Row dd={"properties"}>
      <PrettyJSON code={properties} />
    </Row>
  );
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

const renderSraSampleAttributes = (data: ElasticSearchSource) => {
  if (data.type !== "sra-sample") return <></>;
  const attributes = data.properties.SAMPLE_ATTRIBUTES?.SAMPLE_ATTRIBUTE ?? [];
  const obj = attributes.reduce<Record<string, string>>((acc, attr) => {
    acc[attr.TAG] = attr.VALUE;
    return acc;
  }, {});
  return (
    <Row dd={"attributes"}>
      <DefinitionList {...obj} />
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

const renderRefs = (refs: ElasticSearchSource["dbXrefs"], key: string) => {
  if (!refs) return <Row dd={key} />;
  const obj = refs.reduce<Record<string, { identifier: string; url: string }[]>>((acc, ref) => {
    if (!acc[ref.type]) acc[ref.type] = [];
    acc[ref.type].push(ref);
    return acc;
  }, {});
  const inside = Object.entries(obj)
    .sort(([typeA], [typeB]) => typeA.localeCompare(typeB))
    .map(([type, refs]) => {
      return (
        <div className={"flex"} key={type}>
          <dt className={"w-32 shrink-0 grow-0 font-medium"}>{type}</dt>
          <dd className={"grid grow grid-cols-auto-fill-100 gap-x-3"}>
            {refs.map((ref) => {
              const reg = new RegExp("(.*)(ddbj.nig.ac.jp/resource/)(.*)");
              const result = reg.exec(ref.url);
              const isExternal = !result;
              const rest = result ? result[3] ?? "" : "";
              const linkText = isExternal ? ref.url : `/search/entry/${rest}`;
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

const renderBioProjectUmbrellaProject = (data: ElasticSearchSource) => {
  if (data.type !== "bioproject") return <></>;
  if (data.properties.Project?.Project?.ProjectType?.ProjectTypeTopAdmin) {
    return <Row dd={"project type"}>Umbrella project</Row>;
  } else {
    return <Row dd={"project type"} />;
  }
};

const Row: FC<TailwindElementProps & { dd: string }> = ({ children, className, dd }) => {
  return (
    <div className={clsx("flex overflow-hidden px-2 py-3", className)}>
      <dt className="w-40 shrink-0 grow-0 text-sm font-bold text-gray-900">{dd}</dt>
      <dd className="shrink grow overflow-hidden text-sm text-gray-700">{children}</dd>
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
    <Link to={href} className={classNames} resetScroll={true}>
      {children}
    </Link>
  );
};

const DefinitionList = (obj: Record<string, string | ReactElement>) => (
  <dl className={"grid grid-cols-min-1fr gap-x-4 gap-y-1 leading-normal"}>
    {Object.entries(obj).map(([key, value]) => {
      return (
        <Fragment key={key}>
          <dt className={"whitespace-nowrap font-medium"}>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
      );
    })}
  </dl>
);

const PrettyJSON: FC<{ code: string }> = ({ code }) => {
  return (
    <div className={"max-h-96 min-h-8 w-full overflow-auto"}>
      <SyntaxHighlighter
        language="json"
        style={atomOneDark}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
