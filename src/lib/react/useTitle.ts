import { useEffect } from "react";

export const useTitle = (value?: string | null) => {
  useEffect(() => {
    const titleTag = document.querySelector("title");
    if (!titleTag) return;
    const defaultTitle = "[NEXT] DDBJ SEARCH";
    titleTag.textContent = value ? `${value} | ${defaultTitle}` : defaultTitle;
    return () => {
      titleTag.textContent = defaultTitle;
    };
  }, [value]);
};
