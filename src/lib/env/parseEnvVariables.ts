const envMsw: string | undefined = import.meta.env.VITE_MSW;
export const isMSWEnabled = envMsw?.toLowerCase() === "true";
export const envApiPath: string | undefined = import.meta.env.VITE_API_PATH;
