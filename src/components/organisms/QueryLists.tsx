import { QueryTip } from "@/components/morecules/QueryTip.tsx";
import {
  type SearchQueryState,
  useSearchQueryMutators,
  useSearchQueryState,
} from "@/state/SearchQueryState.ts";
import type { ComponentProps, FC } from "react";

type Props = {};

export const QueryLists: FC<Props> = () => {
  const state = useSearchQueryState();
  const { removeItem } = useSearchQueryMutators();
  const tipData = parseQueryStateToTipList(state);

  //todo set name type properly
  const onClickRemove = (name: string, value: string) => {
    removeItem(name as keyof SearchQueryState, value);
  };

  return (
    <div>
      {tipData.map(({ label, data }) => (
        <QueryTip
          key={`${data.name}:${data.value}`}
          label={label}
          data={data}
          onClickRemove={onClickRemove}
        />
      ))}
    </div>
  );
};

type QueryTipProps = Omit<ComponentProps<typeof QueryTip>, "onClickRemove">;
const parseQueryStateToTipList = (
  state: SearchQueryState
): Omit<ComponentProps<typeof QueryTip>, "onClickRemove">[] => {
  //todo implement label data
  const result: QueryTipProps[] = Object.entries(state)
    .map(([name, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => {
          const label = { name, value: v };
          const data = { name, value: v };
          return { label, data };
        });
      } else {
        const label = { name, value };
        const data = { name, value };
        return { label, data };
      }
    })
    .flat();
  //
  return result;
};

export const __QUERY_LISTS_TEST__ = { parseQueryStateToTipList };
