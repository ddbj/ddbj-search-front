import React, { FC } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { BioProject, BioProjectUmbrellaProject } from "@/components/ui/detail/rows/BioProject.tsx";
import { BioSample } from "@/components/ui/detail/rows/BioSample.tsx";
import {
  CommonDescription,
  CommonTitle,
  Organism,
} from "@/components/ui/detail/rows/CommonRows.tsx";
import { DownloadLinks } from "@/components/ui/detail/rows/DownloadLinks.tsx";
import { Properties } from "@/components/ui/detail/rows/Properties.tsx";
import { RefLinks } from "@/components/ui/detail/rows/RefLinks.tsx";
import { LinkText, Row } from "@/components/ui/detail/rows/Shared.tsx";
import { SraExperiment } from "@/components/ui/detail/rows/SraExperiment.tsx";
import { SraSample } from "@/components/ui/detail/rows/SraSample.tsx";
import { ElasticSearchSource } from "@/types/api.ts";

SyntaxHighlighter.registerLanguage("json", json);

type Props = {
  data: ElasticSearchSource;
};

export const DetailTable: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden bg-white leading-normal shadow sm:rounded-lg ">
        <div className="border-t border-gray-100">
          <dl className="divide-y divide-gray-100 [&>*:nth-child(2n)]:bg-gray-50">
            <Row dd={"identifier"}>{data.identifier}</Row>
            <Row dd={"type"}>{data.type}</Row>
            <RefLinks refs={data.sameAs} title={"sameAs"} />
            <BioProjectUmbrellaProject data={data} />
            <Organism organism={data.organism} />
            <CommonTitle type={data.type} str={data.title} />
            <CommonDescription type={data.type} str={data.description} />
            <BioProject data={data} />
            <BioSample data={data} />
            <SraSample data={data} />
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
