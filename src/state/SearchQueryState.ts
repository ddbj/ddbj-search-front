import { copy } from "copy-anything";
import { atom, useAtomValue, useSetAtom } from "jotai";
import type { DBType } from "@/consts.ts";
import type { CalendarDate } from "@internationalized/date";
import type { RangeValue } from "@react-types/shared";

export type DateRange = RangeValue<CalendarDate>;

export type SearchQueryState = {
  types: { [K in DBType]: boolean };
  keywords: string[];
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
  keywords: [],
  dateUpdated: null,
  datePublished: null,
};

const searchQueryAtom = atom(initialSearchQueryState);

export const useSearchQueryState = () => {
  return useAtomValue(searchQueryAtom);
};
export const useSearchQueryMutators = () => {
  const setSearchQuery = useSetAtom(searchQueryAtom);
  const removeFromSearchQuery = (key: keyof SearchQueryState, value?: string) => {
    setSearchQuery((draft) => {
      const newState = removeItem(draft, key, value);
      return newState;
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
      value
        ? (copied.keywords = value.split(",").map((str) => str.trim()))
        : delete copied.keywords;
      return copied;
    });
  };
  const toggleType = (typeKey: string, isSelected: boolean) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
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
  } as const;
};

const removeItem = (
  original: SearchQueryState,
  key: keyof SearchQueryState,
  value?: string
): SearchQueryState => {
  const copied = copy(original);
  if (copied[key] !== undefined && Array.isArray(copied[key]) && value !== undefined) {
    const arr = copied[key]!;
    const index = arr.indexOf(value);
    if (index >= 0) {
      arr.splice(index, 1);
    }
    if (arr.length === 0) {
      delete copied[key];
    }
  } else {
    delete copied[key];
  }
  return copied;
};

export const __SEARCH_QUERY_STATE_TEST__ = {
  removeItem,
};

// export const useSelectedQueryState = {};
