import { notFound } from "@tanstack/react-router";
import { ELASTICSEARCH_URL } from "@/constants.ts";
import { ElasticSearchSource, MultiSearchElasticsearchResponse } from "@/types/api.ts";

export const fetchDetail = async (id: string): Promise<ElasticSearchSource> => {
  const endpoint = `${ELASTICSEARCH_URL}/jga-*,sra-*,bioproject,biosample/_msearch?`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: makeQueryBody(id),
  }).catch(() => {});
  const data: MultiSearchElasticsearchResponse = await res?.json();
  if (!data) throw new Error("Failed to fetch data");
  if (!data.responses[0]) throw notFound();
  if (!data.responses[0].hits.hits[0]) throw notFound();
  return data.responses[0].hits.hits[0]._source;
};

const makeQueryBody = (id: string) => {
  return `
{"preference":"query"}
${JSON.stringify({
  _source: {
    includes: ["*"],
    excludes: ["search"],
  },
  query: {
    match: {
      _id: id,
    },
  },
})}

`;
};
