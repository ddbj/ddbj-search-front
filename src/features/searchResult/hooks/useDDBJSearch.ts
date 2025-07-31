import { useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { removeFromSearch } from "@/features/searchResult/utils/removeFromSearch.ts";
import { type DateRange, dateRangeDataToString } from "@/utils/date.ts";
import type { DBType } from "@/consts/db.ts";
import type { AllSearchParams, AllSearchParamsKey } from "@/schema/search.ts";

export type DDBJSearchParams = {
  params: AllSearchParams;
  update: {
    moveToEntryRoot: (params: AllSearchParams) => void;
    changeKeywords: (v: string[]) => void;
    mergeDBTypes: (type: DBType, v: boolean) => void;
    changeUpdated: (v: DateRange | null) => void;
    changePublished: (v: DateRange | null) => void;
    changeUmbrella: (v: boolean) => void;
    changeOrganization: (v: string) => void;
    changePublication: (v: string) => void;
    changeGrant: (v: string) => void;
    removeParam: (name: AllSearchParamsKey, value: string) => void;
  };
};

const replace = true;
const from = "/";

type P = AllSearchParams;

export const useDDBJSearchParams = (params: AllSearchParams): DDBJSearchParams => {
  const navigate = useNavigate();
  //
  const update = useMemo(() => {
    return {
      moveToEntryRoot: (params: P) => {
        navigate({ search: params, from, to: "/entry" });
      },
      changeKeywords: (v: string[]) => {
        navigate({ search: (prev: P) => composeKeywords(prev, v), replace, from });
      },
      mergeDBTypes: (type: DBType, v: boolean) => {
        navigate({ search: (prev: P) => mergeDBTypes(prev, type, v), replace, from });
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
        navigate({ search: (prev: P) => composeOrganization(prev, v), replace, from });
      },
      changeGrant: (v: string) => {
        navigate({ search: (prev: P) => composeOrganization(prev, v), replace, from });
      },
      removeParam: (key: AllSearchParamsKey, v: string) => {
        navigate({ search: (prev: P) => removeFromSearch(prev, key, v), replace, from });
      },
    };
  }, [navigate]) satisfies DDBJSearchParams["update"];
  return { params, update };
};

const composeKeywords = (params: P, value: string[]): P => {
  const { keywords: prev, ...rest } = params;
  return value.length ? { ...rest, keywords: value } : rest;
};

const mergeDBTypes = (params: P, type: DBType, value: boolean) => {
  const { types: prev, ...rest } = params;
  const merged = value ? [...(prev ?? []), type] : [...(prev ?? [])].filter((t) => t !== type);
  const unique = [...new Set(merged)];
  return unique.length ? { ...rest, types: unique } : rest;
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
