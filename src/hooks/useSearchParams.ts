import { useSyncExternalStore } from "react";

const getSnapshot = () => {
  return window.location.search;
};
const subscribe = (callback: () => void) => {
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("popstate", callback);
  };
};

export const useSearchParams = () => {
  const params = useSyncExternalStore(subscribe, getSnapshot);
  return new URLSearchParams(params);
};
