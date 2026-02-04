import { isEqual } from "@ver0/deep-equal";
import { useMemo } from "react";
import type { DBType } from "@/consts/db.ts";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";
type NavigateLike<TSearch extends AnySearchParams> = (opts: {
  search?: TSearch | ((prev: TSearch) => TSearch);
  replace?: boolean;
  to?: string;
}) => void;

export type UpdateSearchFunctions<TSearch extends AnySearchParams = AnySearchParams> = {
  moveToEntryRoot: (params: TSearch) => void;
  moveToPage: (page: number) => void;
  changeKeywords: (v: string[]) => void;
  setDBTypes: (v: DBType[]) => void;
  changeUpdated: (v: string) => void;
  changePublished: (v: string) => void;
  changeUmbrella: (v: boolean) => void;
  changeOrganization: (v: string) => void;
  changePublication: (v: string) => void;
  changeGrant: (v: string) => void;
  removeParam: (name: AnySearchParamsKey, value: string) => void;
};

const replace = true;

type P = AnySearchParams;

export const useUpdateSearchFunctions = <TSearch extends AnySearchParams>(
  navigate: NavigateLike<TSearch>
): UpdateSearchFunctions<TSearch> => {
  const update = useMemo(() => {
    return {
      moveToEntryRoot: (params: TSearch) => {
        navigate({ search: params, to: "/entry/" });
      },
      moveToPage: (v: number) => {
        navigate({ search: (prev: TSearch) => composePageNumber(prev, v) as TSearch });
      },
      changeKeywords: (v: string[]) => {
        // console.log("changeKeywords", v);
        navigate({ search: (prev: TSearch) => composeKeywords(prev, v) as TSearch, replace });
      },
      setDBTypes: (v: DBType[]) => {
        // console.log("setDBTypes", v);
        navigate({ search: (prev: TSearch) => composeDBTypes(prev, v) as TSearch, replace });
      },
      changeUpdated: (v: string) => {
        navigate({ search: (prev: TSearch) => composeUpdated(prev, v) as TSearch, replace });
      },
      changePublished: (v: string) => {
        navigate({ search: (prev: TSearch) => composePublished(prev, v) as TSearch, replace });
      },
      changeUmbrella: (v: boolean) => {
        navigate({ search: (prev: TSearch) => composeUmbrella(prev, v) as TSearch, replace });
      },
      changeOrganization: (v: string) => {
        navigate({ search: (prev: TSearch) => composeOrganization(prev, v) as TSearch, replace });
      },
      changePublication: (v: string) => {
        navigate({ search: (prev: TSearch) => composePublication(prev, v) as TSearch, replace });
      },
      changeGrant: (v: string) => {
        navigate({ search: (prev: TSearch) => composeGrant(prev, v) as TSearch, replace });
      },
      removeParam: (key: AnySearchParamsKey, v: string) => {
        navigate({
          search: (prev: TSearch) => removeFromSearch(prev, key, v) as TSearch,
          replace,
        });
      },
    } satisfies UpdateSearchFunctions<TSearch>;
  }, [navigate]);
  return update;
};

const removeFromSearch = (
  current: AnySearchParams,
  key: AnySearchParamsKey,
  value: string
): AnySearchParams => {
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
  moveToEntryRoot: (params: AnySearchParams) => {},
  moveToPage: (page: number) => {},
  changeKeywords: (v: string[]) => {},
  setDBTypes: (v: DBType[]) => {},
  changeUpdated: (v: string) => {},
  changePublished: (v: string) => {},
  changeUmbrella: (v: boolean) => {},
  changeOrganization: (v: string) => {},
  changePublication: (v: string) => {},
  changeGrant: (v: string) => {},
  removeParam: (name: AnySearchParamsKey, value: string) => {},
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
