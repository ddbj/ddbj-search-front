import { copy } from "copy-anything";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { type DBType, isDBType } from "@/consts.ts";
import type { DateRange } from "@/utils/date.ts";

export type SearchQueryState = {
  types: { [K in DBType]: boolean };
  keywords: string;
  datePublished: DateRange | null;
  dateUpdated: DateRange | null;
};

const initialSearchQueryState: SearchQueryState = {
  types: {
    biosample: false,
    bioproject: false,
    "sra-run": false,
    "sra-experiment": false,
    "sra-sample": false,
    "sra-analysis": false,
    "sra-submission": false,
    "sra-study": false,
    "jga-dataset": false,
    "jga-study": false,
    "jga-policy": false,
    "jga-dac": false,
  },
  keywords: "",
  dateUpdated: null,
  datePublished: null,
};

const searchQueryAtom = atom(initialSearchQueryState);

export const useSearchQueryState = () => {
  return useAtomValue(searchQueryAtom);
};
export const useSearchQueryMutators = () => {
  const setSearchQuery = useSetAtom(searchQueryAtom);
  const refrectSearchParams = () => {};
  //
  const _overwriteSearchQuery = (state: SearchQueryState) => {
    setSearchQuery(state);
  };
  const removeFromSearchQuery = (key: keyof SearchQueryState, value?: string) => {
    setSearchQuery((draft) => {
      return removeItem(draft, key, value);
    });
  };
  const updateDatePublished = (value: DateRange | null) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
      copied.datePublished = value;
      return copied;
    });
  };
  const updateDateUpdated = (value: DateRange | null) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
      copied.dateUpdated = value;
      return copied;
    });
  };
  const updateKeywords = (value: string | null) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
      copied.keywords = value ?? "";
      return copied;
    });
  };
  const toggleType = (key: DBType, isSelected: boolean) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
      copied.types[key] = isSelected;
      return copied;
    });
  };

  return {
    removeFromSearchQuery,
    setSearchQuery,
    updateDatePublished,
    updateDateUpdated,
    updateKeywords,
    toggleType,
    _overwriteSearchQuery,
  } as const;
};

const removeItem = (
  original: SearchQueryState,
  key: keyof SearchQueryState,
  value?: string
): SearchQueryState => {
  const copied = copy(original);
  switch (key) {
    case "datePublished":
    case "dateUpdated":
      copied[key] = null;
      break;
    case "keywords":
      copied[key] = removeItemFromKeywords(original[key], value ?? "");
      break;
    case "types":
      if (isDBType(value) && copied[key][value]) {
        copied[key][value] = false;
      }
      break;
  }
  return copied;
};

const removeItemFromKeywords = (keywords: string, value: string) => {
  const arr = keywords
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");
  const index = arr.indexOf(value);
  if (index === -1) return keywords;
  arr.splice(index, 1);
  return arr.join(", ");
};

const getNewInitialState = () => copy(initialSearchQueryState);

export const __SEARCH_QUERY_STATE_TEST__ = {
  removeItem,
  getNewInitialState,
};

// export const useSelectedQueryState = {};
