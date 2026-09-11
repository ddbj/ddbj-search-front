import { useEffect } from "react";
import { ENV_LIVE, envDeployment } from "@/lib/env/parseEnvVariables.ts";

const envStr = envDeployment.toUpperCase() === ENV_LIVE ? "" : `[${envDeployment}] `;

export const useTitle = (value?: string | null) => {
  useEffect(() => {
    const titleTag = document.querySelector("title");
    if (!titleTag) return;
    const defaultTitle = "DDBJ Search";
    titleTag.textContent = envStr + (value ? `${value} | ${defaultTitle}` : defaultTitle);
    return () => {
      titleTag.textContent = envStr + defaultTitle;
    };
  }, [value]);
};
