import { isEqual } from "@ver0/deep-equal";
import { useMemo } from "react";
import type { BioProjectObjectType, SortKey } from "@/api/valueTypes.ts";
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
  changeOrganism: (v: string | null) => void;
  setDBTypes: (v: DBType[]) => void;
  changeObjectTypes: (v: BioProjectObjectType[]) => void;
  changeDateModifiedRange: (v: string) => void;
  changeDatePublishedRange: (v: string) => void;
  changeOrganization: (v: string) => void;
  changePublication: (v: string) => void;
  changeGrant: (v: string) => void;
  changeSort: (v: SortKey | null) => void;
  removeParam: (name: AnySearchParamsKey | AnySearchParamsKey[], value: string) => void;
};

const replace = true;

type P = AnySearchParams;

export const useUpdateSearchFunctions = <TSearch extends AnySearchParams>(
  navigate: NavigateLike<TSearch>,
): UpdateSearchFunctions<TSearch> => {
  const update = useMemo(() => {
    return {
      moveToEntryRoot: (params: TSearch) => {
        navigate({ search: params, to: "/entry/" });
      },
      moveToPage: (v: number) => {
        navigate({ search: (prev: TSearch) => composePageNumber(prev, v) as TSearch });
      },
      changeSort: (v: SortKey | null) => {
        navigate({ search: (prev: TSearch) => composeSort(prev, v) as TSearch, replace });
      },
      changeKeywords: (v: string[]) => {
        // console.log("changeKeywords", v);
        navigate({ search: (prev: TSearch) => composeKeywords(prev, v) as TSearch, replace });
      },
      changeOrganism: (v: string | null) => {
        navigate({ search: (prev: TSearch) => composeOrganism(prev, v) as TSearch, replace });
      },
      setDBTypes: (v: DBType[]) => {
        // console.log("setDBTypes", v);
        navigate({ search: (prev: TSearch) => composeDBTypes(prev, v) as TSearch, replace });
      },
      changeObjectTypes: (v: BioProjectObjectType[]) => {
        navigate({ search: (prev: TSearch) => composeObjectTypes(prev, v) as TSearch, replace });
      },
      changeDateModifiedRange: (v: string) => {
        navigate({ search: (prev: TSearch) => composeDateModified(prev, v) as TSearch, replace });
      },
      changeDatePublishedRange: (v: string) => {
        navigate({ search: (prev: TSearch) => composeDatePublished(prev, v) as TSearch, replace });
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
      removeParam: (key: AnySearchParamsKey | AnySearchParamsKey[], v: string) => {
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
  key: AnySearchParamsKey | AnySearchParamsKey[],
  value: string,
): AnySearchParams => {
  if (Array.isArray(key)) {
    const next = { ...current };
    key.forEach((k) => {
      if (k in next) {
        delete next[k];
      }
    });
    const { page, ...rest } = next;
    return rest;
  } else {
    const { [key]: prev, page, ...rest } = current;
    if (isStringArray(prev)) {
      const filtered = prev.filter((t) => t.trim() !== value.trim());
      return { ...rest, ...(filtered.length ? { [key]: filtered } : {}) };
    } else {
      return rest;
    }
  }
};

const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
};

const composePageNumber = (params: P, value: number): P => {
  const { page: prev, ...rest } = params;
  return value > 1 ? { ...rest, page: Math.floor(value) } : rest;
};
const composeSort = (params: P, value: SortKey | null): P => {
  const { sort: prev, page, ...rest } = params;
  if (value === prev || (value === null && prev === undefined)) return params;
  if (value === null) return rest;
  return { ...rest, sort: value };
};

const composeKeywords = (params: P, value: string[]): P => {
  if (isEqual(params.keywords ?? [], value)) return params;
  const { keywords: prev, page, ...rest } = params;
  return value.length ? { ...rest, keywords: value } : rest;
};
const composeOrganism = (params: P, value: string | null): P => {
  const nextValue = value ?? "";
  if ((params.organism ?? "") === nextValue) return params;
  const { organism: prev, page, ...rest } = params;
  return nextValue ? { ...rest, organism: nextValue } : rest;
};
const composeDBTypes = (params: P, value: DBType[]): P => {
  if (isEqual(params.types ?? [], value)) return params;
  const { types: prev, page, ...rest } = params;
  return value.length ? { ...rest, types: value } : rest;
};
const composeObjectTypes = (params: P, value: BioProjectObjectType[]): P => {
  if (isEqual(params.objectTypes ?? [], value)) return params;
  const { objectTypes: prev, page, ...rest } = params;
  return value.length ? { ...rest, objectTypes: value } : rest;
};
const composeDateModified = (params: P, value: string): P => {
  const [from = "", to = ""] = value.split(",");
  const { dateModifiedFrom = "", dateModifiedTo = "", page, ...rest } = params;
  //unchanged, returns the original
  if (from === dateModifiedFrom && to === dateModifiedTo) return params;
  //set as empty, returns removed parameters without page
  if (from === "" && to === "") return rest;
  // otherwise returns updated without page
  return { ...rest, dateModifiedFrom: from, dateModifiedTo: to };
};
const composeDatePublished = (params: P, value: string): P => {
  const [from = "", to = ""] = value.split(",");
  const { datePublishedFrom = "", datePublishedTo = "", page, ...rest } = params;
  //unchanged, returns the original
  if (from === datePublishedFrom && to === datePublishedTo) return params;
  //set as empty, returns removed parameters without page
  if (from === "" && to === "") return rest;
  // otherwise returns updated without page
  return { ...rest, datePublishedFrom: from, datePublishedTo: to };
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
  moveToEntryRoot: (_params: AnySearchParams) => {},
  moveToPage: (_page: number) => {},
  changeSort: (_v: string | null) => {},
  changeKeywords: (_v: string[]) => {},
  changeOrganism: (_v: string | null) => {},
  setDBTypes: (_v: DBType[]) => {},
  changeObjectTypes: (_v: BioProjectObjectType[]) => {},
  changeDateModifiedRange: (_v: string) => {},
  changeDatePublishedRange: (_v: string) => {},
  changeOrganization: (_v: string) => {},
  changePublication: (_v: string) => {},
  changeGrant: (_v: string) => {},
  removeParam: (_name: AnySearchParamsKey | AnySearchParamsKey[], _value: string) => {},
};

export const __TEST_updateFunctions = {
  removeFromSearch,
  composeSort,
  composeKeywords,
  composeOrganism,
  composeDBTypes,
  composeObjectTypes,
  composeDateModified,
  composeDatePublished,
  composeOrganization,
  composePublication,
  composeGrant,
};
