import { useEffect } from "react";
import { ElasticSearchSource } from "@/types/api.ts";

export const useTitle = (data?: ElasticSearchSource) => {
  useEffect(() => {
    const titleTag = document.querySelector("title");
    if (!titleTag) return;
    const defaultTitle = "DDBJ Search";
    titleTag.textContent = data ? `${data.identifier} | ${data.type} | DDBJ Search` : defaultTitle;
  }, [data]);
};
