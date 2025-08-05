import { useNavigate } from "@tanstack/react-router";
import { isEqual } from "@ver0/deep-equal";
import { useMemo } from "react";
import type { DBType } from "@/consts/db.ts";
import type { AllSearchParams, AllSearchParamsKey } from "@/schema/search.ts";

export type UpdateSearchFunctions = {
  moveToEntryRoot: (params: AllSearchParams) => void;
  moveToPage: (page: number) => void;
  changeKeywords: (v: string[]) => void;
  setDBTypes: (v: DBType[]) => void;
  changeUpdated: (v: string) => void;
  changePublished: (v: string) => void;
  changeUmbrella: (v: boolean) => void;
  changeOrganization: (v: string) => void;
  changePublication: (v: string) => void;
  changeGrant: (v: string) => void;
  removeParam: (name: AllSearchParamsKey, value: string) => void;
};

const replace = true;
const from = "/";

type P = AllSearchParams;

export const useUpdateSearchFunctions = (): UpdateSearchFunctions => {
  const navigate = useNavigate();
  const update = useMemo(() => {
    return {
      moveToEntryRoot: (params: P) => {
        navigate({ search: params, from, to: "/entry" });
      },
      moveToPage: (v: number) => {
        navigate({ search: (prev) => composePageNumber(prev, v), from });
      },
      changeKeywords: (v: string[]) => {
        console.log("changeKeywords", v);
        navigate({ search: (prev: P) => composeKeywords(prev, v), replace, from });
      },
      setDBTypes: (v: DBType[]) => {
        console.log("setDBTypes", v);
        navigate({ search: (prev: P) => composeDBTypes(prev, v), replace, from });
      },
      changeUpdated: (v: string) => {
        navigate({ search: (prev: P) => composeUpdated(prev, v), replace, from });
      },
      changePublished: (v: string) => {
        navigate({ search: (prev: P) => composePublished(prev, v), replace, from });
      },
      changeUmbrella: (v: boolean) => {
        navigate({ search: (prev: P) => composeUmbrella(prev, v), replace, from });
      },
      changeOrganization: (v: string) => {
        navigate({ search: (prev: P) => composeOrganization(prev, v), replace, from });
      },
      changePublication: (v: string) => {
        navigate({ search: (prev: P) => composePublication(prev, v), replace, from });
      },
      changeGrant: (v: string) => {
        navigate({ search: (prev: P) => composeGrant(prev, v), replace, from });
      },
      removeParam: (key: AllSearchParamsKey, v: string) => {
        navigate({ search: (prev: P) => removeFromSearch(prev, key, v), replace, from });
      },
    } satisfies UpdateSearchFunctions;
  }, [navigate]);
  return update;
};

const removeFromSearch = (
  current: AllSearchParams,
  key: AllSearchParamsKey,
  value: string
): AllSearchParams => {
  const { [key]: prev, page, ...rest } = current;
  if (Array.isArray(prev)) {
    const filtered = prev.filter((t) => t.trim() !== value.trim());
    return { ...rest, ...(filtered.length ? { [key]: filtered } : {}) };
  } else {
    return rest;
  }
};

const composePageNumber = (params: P, value: number): P => {
  const { page: prev, ...rest } = params;
  return value > 1 ? { ...rest, page: Math.floor(value) } : rest;
};

const composeKeywords = (params: P, value: string[]): P => {
  if (isEqual(params.keywords ?? [], value)) return params;
  const { keywords: prev, page, ...rest } = params;
  return value.length ? { ...rest, keywords: value } : rest;
};
const composeDBTypes = (params: P, value: DBType[]): P => {
  if (isEqual(params.types ?? [], value)) return params;
  const { types: prev, page, ...rest } = params;
  return value.length ? { ...rest, types: value } : rest;
};
const composeUpdated = (params: P, value: string): P => {
  if ((params.dateUpdated ?? "") === value) return params;
  const { dateUpdated: prev, page, ...rest } = params;
  return value ? { ...rest, dateUpdated: value } : rest;
};
const composePublished = (params: P, value: string): P => {
  if ((params.datePublished ?? "") === value) return params;
  const { datePublished: prev, page, ...rest } = params;
  return value ? { ...rest, datePublished: value } : rest;
};
const composeUmbrella = (params: P, value: boolean): P => {
  if ((params.umbrella ?? false) === value) return params;
  const { umbrella: prev, page, ...rest } = params;
  return value ? { ...rest, umbrella: value } : rest;
};
const composeOrganization = (params: P, value: string) => {
  if ((params.organization ?? "") === value) return params;
  const { organization: prev, page, ...rest } = params;
  return value ? { ...rest, organization: value } : rest;
};
const composePublication = (params: P, value: string) => {
  if ((params.publication ?? "") === value) return params;
  const { publication: prev, page, ...rest } = params;
  return value ? { ...rest, publication: value } : rest;
};
const composeGrant = (params: P, value: string) => {
  if ((params.grant ?? "") === value) return params;
  const { grant: prev, page, ...rest } = params;
  return value ? { ...rest, grant: value } : rest;
};

export const __SB_updateFunctions: UpdateSearchFunctions = {
  moveToEntryRoot: (params: AllSearchParams) => {},
  moveToPage: (page: number) => {},
  changeKeywords: (v: string[]) => {},
  setDBTypes: (v: DBType[]) => {},
  changeUpdated: (v: string) => {},
  changePublished: (v: string) => {},
  changeUmbrella: (v: boolean) => {},
  changeOrganization: (v: string) => {},
  changePublication: (v: string) => {},
  changeGrant: (v: string) => {},
  removeParam: (name: AllSearchParamsKey, value: string) => {},
};

export const __TEST_updateFunctions = {
  removeFromSearch,
  composeKeywords,
  composeDBTypes,
  composeUpdated,
  composePublished,
  composeUmbrella,
  composeOrganization,
  composePublication,
  composeGrant,
};
