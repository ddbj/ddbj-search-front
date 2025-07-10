import { copy } from "copy-anything";
import { atom, useAtomValue, useSetAtom } from "jotai";

export type SearchQueryState = {
  types?: string[];
  keywords?: string[];
  datePublished?: string;
  dateUpdated?: string;
};

const initialSearchQueryState: SearchQueryState = {};

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
  const updateDatePublished = (value: string | null) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
      value ? (copied.datePublished = value) : delete copied.datePublished;
      return copied;
    });
  };
  const updateDateUpdated = (value: string | null) => {
    setSearchQuery((draft) => {
      const copied = copy(draft);
      value ? (copied.dateUpdated = value) : delete copied.dateUpdated;
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
