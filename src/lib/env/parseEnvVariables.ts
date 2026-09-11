const envMsw: string | undefined = import.meta.env.VITE_MSW;
export const isMSWEnabled = envMsw?.toLowerCase() === "true";
export const envApiPath: string | undefined = import.meta.env.VITE_API_PATH;
export const ENV_LIVE = "LIVE";
export const envDeployment: string = import.meta.env.VITE_DEPLOYMENT_ENV ?? ENV_LIVE;
