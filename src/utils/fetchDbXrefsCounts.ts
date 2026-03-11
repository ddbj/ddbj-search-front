import { API_URL } from "@/constants.ts";
import { DbXrefsCount } from "@/types/api.ts";

type DbLinksCountItem = {
  identifier: string;
  type: string;
  counts: DbXrefsCount;
};

type DbLinksCountsResponse = {
  items: DbLinksCountItem[];
};

export const fetchDbXrefsCounts = async (
  items: { type: string; id: string }[]
): Promise<Map<string, DbXrefsCount>> => {
  if (items.length === 0) return new Map();

  const res = await fetch(`${API_URL}/dblink/counts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
  if (!res.ok) return new Map();

  const data: DbLinksCountsResponse = await res.json();
  const map = new Map<string, DbXrefsCount>();
  for (const item of data.items) {
    map.set(`${item.type}:${item.identifier}`, item.counts);
  }

  return map;
};
