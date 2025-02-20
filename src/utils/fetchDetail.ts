import { ELASTICSEARCH_URL } from "@/constants.ts";
import { ElasticSearchSource, SingleSearchElasticsearchResponse } from "@/types/api.ts";

export const fetchDetail = async (type: string, id: string): Promise<ElasticSearchSource> => {
  const endpoint = `${ELASTICSEARCH_URL}/${type}/_doc/${id}`;
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch(() => {});
  const data: SingleSearchElasticsearchResponse = await res?.json();
  if (!data) throw new Error("Failed to fetch data");
  return data._source;
};
