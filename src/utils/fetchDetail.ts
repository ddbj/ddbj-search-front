import { BASE_URL } from "@/constants.ts";
import { ElasticSearchSource } from "@/types/api.ts";

const API_URL = `${BASE_URL}/search/api`;

export const fetchDetail = async (type: string, id: string): Promise<ElasticSearchSource> => {
  const endpoint = `${API_URL}/entries/${type}/${id}`;
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${type}/${id}: ${res.status} ${res.statusText}`);
  }
  const data: ElasticSearchSource = await res.json();
  return data;
};
