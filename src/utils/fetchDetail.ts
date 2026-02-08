import { ELASTICSEARCH_URL } from "@/constants.ts";
import { ElasticSearchSource, SingleSearchElasticsearchResponse } from "@/types/api.ts";

export const fetchDetail = async (type: string, id: string): Promise<ElasticSearchSource> => {
  const endpoint = `${ELASTICSEARCH_URL}/${type}/_doc/${id}`;
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${type}/${id}: ${res.status} ${res.statusText}`);
  }
  const data: SingleSearchElasticsearchResponse = await res.json();
  if (!data?._source) {
    throw new Error(`Entry not found: ${type}/${id}`);
  }
  return data._source;
};
