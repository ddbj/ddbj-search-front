import clsx from "clsx";
import { QueryTip } from "@/components/morecules/QueryTip.tsx";
import {
  type SearchQueryState,
  useSearchQueryMutators,
  useSearchQueryState,
} from "@/state/SearchQueryState.ts";
import { type DateRange, dateRangeToString2 } from "@/utils/date.ts";
import type { ComponentProps, FC } from "react";

type Props = {};

const tipWrapperClasses = clsx("flex flex-wrap gap-2");

export const QueryLists: FC<Props> = () => {
  const state = useSearchQueryState();
  const { removeFromSearchQuery } = useSearchQueryMutators();
  const tipData = parseQueryStateToTipList(state);

  //todo set name type properly
  const onClickRemove = (name: string, value: string) => {
    removeFromSearchQuery(name as keyof SearchQueryState, value);
  };

  if (tipData.length === 0) {
    return <></>;
  }

  return (
    <div>
      <h3>Queries:</h3>
      <div className={tipWrapperClasses}>
        {tipData.map(({ label, data }) => (
          <QueryTip
            key={`${data.name}:${data.value}`}
            label={label}
            data={data}
            onClickRemove={onClickRemove}
          />
        ))}
      </div>
    </div>
  );
};

type QueryTipProps = Omit<ComponentProps<typeof QueryTip>, "onClickRemove">;
const parseQueryStateToTipList = (state: SearchQueryState): QueryTipProps[] => {
  const keywords: QueryTipProps[] = state.keywords
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "")
    .map((t) => {
      const data = { name: "keywords", value: t };
      const label = { name: "Keyword", value: t };
      return { data, label };
    });
  //
  const isAllTypesSelected = Object.values(state.types).every((value) => value);
  const types: QueryTipProps[] = isAllTypesSelected
    ? []
    : Object.entries(state.types)
        .filter(([_key, value]) => !!value)
        .map(([value, _key]) => {
          const data = { name: "types", value };
          const label = { name: "Type", value };
          return { data, label };
        });

  const dates: QueryTipProps[] = [
    parseDateRangeToQueryTipProps(state.datePublished, "datePublished", "Published"),
    parseDateRangeToQueryTipProps(state.dateUpdated, "dateUpdated", "Updated"),
  ].filter((v) => !!v);

  const result: QueryTipProps[] = [...keywords, ...types, ...dates];

  return result;
};

const parseDateRangeToQueryTipProps = (
  range: DateRange | null,
  dataName: string,
  labelName: string
): QueryTipProps | null => {
  const value = dateRangeToString2(range);
  if (!value) return null;
  const { start, end } = value;
  const data = { name: dataName, value: `${start}_${end}` };
  const label = { name: labelName, value: `${start} | ${end}` };
  return { data, label };
};

export const __QUERY_LISTS_TEST__ = { parseQueryStateToTipList };
