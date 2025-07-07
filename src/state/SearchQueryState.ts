import { copy } from "copy-anything";
import { atom, useAtomValue, useSetAtom } from "jotai";

export type SearchQueryState = {
  types?: string[];
  keywords?: string[];
  datePublished?: string;
  dateUpdated?: string;
};

const initialSearchQueryState: SearchQueryState = { types: ["BioSample"] };

const searchQueryAtom = atom(initialSearchQueryState);

export const useSearchQueryState = () => {
  return useAtomValue(searchQueryAtom);
};
export const useSearchQueryMutators = () => {
  const setSearchQuery = useSetAtom(searchQueryAtom);
  const removeItem = (key: keyof SearchQueryState, value?: string) => {
    setSearchQuery((draft) => {
      const newState = _removeItem(draft, key, value);
      return newState;
    });
  };

  return { removeItem } as const;
};

const _removeItem = (
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
  _removeItem,
};

// export const useSelectedQueryState = {};
