import { useEffect, useState } from "react";
import { DbXrefsCount } from "@/types/api.ts";
import { fetchDbXrefsCounts } from "@/utils/fetchDbXrefsCounts.ts";

type DbXrefsCountsState = {
  loading: boolean;
  countsMap: Map<string, DbXrefsCount>;
};

export const useDbXrefsCounts = (
  items: { type: string; identifier: string }[]
): DbXrefsCountsState => {
  const [state, setState] = useState<DbXrefsCountsState>({
    loading: false,
    countsMap: new Map(),
  });

  const key = items.map((i) => `${i.type}:${i.identifier}`).join(",");

  useEffect(() => {
    const requestItems = items.map((i) => ({ type: i.type, id: i.identifier }));

    if (requestItems.length === 0) {
      setState({ loading: false, countsMap: new Map() });

      return;
    }

    setState((prev) => ({ ...prev, loading: true }));

    let cancelled = false;
    fetchDbXrefsCounts(requestItems).then((map) => {
      if (!cancelled) setState({ loading: false, countsMap: map });
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
};
