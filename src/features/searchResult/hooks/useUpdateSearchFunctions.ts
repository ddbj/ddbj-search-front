import { useNavigate } from "@tanstack/react-router";
import { isEqual } from "@ver0/deep-equal";
import { useMemo } from "react";
import { removeFromSearch } from "@/features/searchResult/utils/removeFromSearch.ts";
import { type DateRange, dateRangeDataToString } from "@/utils/date.ts";
import type { DBType } from "@/consts/db.ts";
import type { AllSearchParams, AllSearchParamsKey } from "@/schema/search.ts";

export type UpdateSearchFunctions = {
  moveToEntryRoot: (params: AllSearchParams) => void;
  moveToPage: (page: number) => void;
  changeKeywords: (v: string[]) => void;
  setDBTypes: (v: DBType[]) => void;
  changeUpdated: (v: DateRange | null) => void;
  changePublished: (v: DateRange | null) => void;
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
      changeUpdated: (v: DateRange | null) => {
        navigate({ search: (prev: P) => composeUpdated(prev, v), replace, from });
      },
      changePublished: (v: DateRange | null) => {
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
const composeUpdated = (params: P, value: DateRange | null): P => {
  const { dateUpdated: prev, ...rest } = params;
  return value ? { ...rest, dateUpdated: dateRangeDataToString(value) } : rest;
};
const composePublished = (params: P, value: DateRange | null): P => {
  const { datePublished: prev, ...rest } = params;
  return value ? { ...rest, datePublished: dateRangeDataToString(value) } : rest;
};
const composeUmbrella = (params: P, value: boolean): P => {
  const { umbrella: prev, ...rest } = params;
  return value ? { ...rest, umbrella: value } : rest;
};
const composeOrganization = (params: P, value: string) => {
  const { organization: prev, ...rest } = params;
  return value ? { ...rest, organization: value } : rest;
};
const composePublication = (params: P, value: string) => {
  const { publication: prev, ...rest } = params;
  return value ? { ...rest, publication: value } : rest;
};
const composeGrant = (params: P, value: string) => {
  const { grant: prev, ...rest } = params;
  return value ? { ...rest, grant: value } : rest;
};

export const __SB_updateFunctions: UpdateSearchFunctions = {
  moveToEntryRoot: (params: AllSearchParams) => {},
  moveToPage: (page: number) => {},
  changeKeywords: (v: string[]) => {},
  setDBTypes: (v: DBType[]) => {},
  changeUpdated: (v: DateRange | null) => {},
  changePublished: (v: DateRange | null) => {},
  changeUmbrella: (v: boolean) => {},
  changeOrganization: (v: string) => {},
  changePublication: (v: string) => {},
  changeGrant: (v: string) => {},
  removeParam: (name: AllSearchParamsKey, value: string) => {},
};

export const __TEST_updateFunctions = {
  composeKeywords,
  composeDBTypes,
  composeUpdated,
  composePublished,
  composeUmbrella,
  composeOrganization,
  composePublication,
  composeGrant,
};
