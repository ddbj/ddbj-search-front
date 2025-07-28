import { useNavigate, useSearch } from "@tanstack/react-router";
import clsx from "clsx";
import { isUndefined } from "is-what";
import { QueryTip } from "@/features/searchResult/ui/QueryTip.tsx";
import { routeTree } from "@/routeTree.gen.ts";
import { type AllSearch, type SearchDateRange, isAllResourcesKey } from "@/schema/search.ts";
import { removeFromSearch } from "@/features/searchResult/utils/removeFromSearch.ts";
import type { ComponentProps, FC } from "react";

type Props = {};

const tipWrapperClasses = clsx("flex flex-wrap gap-2");

export const QueryLists: FC<Props> = () => {
  const searchParams = useSearch({ strict: false });
  const tipData = parseQueryStateToTipList(searchParams);
  const navigate = useNavigate();

  const onClickRemove = (name: string, value: string) => {
    const from = routeTree.fullPath;
    const replace = true;
    if (isAllResourcesKey(name)) {
      const search = removeFromSearch(searchParams, name, value);
      navigate({ from, search, replace });
    }
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
const parseQueryStateToTipList = (state: AllSearch): QueryTipProps[] => {
  const keywords: QueryTipProps[] = (state.keywords ?? [])
    .map((t) => t.trim())
    .filter((t) => t !== "")
    .map((t) => {
      const data = { name: "keywords", value: t };
      const label = { name: "Keyword", value: t };
      return { data, label };
    });
  const types: QueryTipProps[] = (state.types ?? []).map((value) => {
    const data = { name: "types", value };
    const label = { name: "Type", value };
    return { data, label };
  });
  const dates: QueryTipProps[] = [
    parseDateRangeToQueryTipProps(state.datePublished, "datePublished", "Published"),
    parseDateRangeToQueryTipProps(state.dateUpdated, "dateUpdated", "Updated"),
  ].filter((v) => !!v);
  const organization: QueryTipProps[] = parseSingleStringToQueryTipProps(
    state.organization,
    "organization",
    "Organization"
  );
  const publication: QueryTipProps[] = parseSingleStringToQueryTipProps(
    state.publication,
    "publication",
    "Publication"
  );
  const grant = parseSingleStringToQueryTipProps(state.grant, "grant", "Grant");
  const umbrella = parseSingleBooleanToQueryTipProps(state.umbrella, "umbrella", "Umbrella");

  const result: QueryTipProps[] = [
    ...keywords,
    ...types,
    ...dates,
    ...organization,
    ...publication,
    ...grant,
    ...umbrella,
  ];

  return result;
};

const parseSingleStringToQueryTipProps = (
  stateValue: string | undefined,
  dataName: string,
  labelName: string
): QueryTipProps[] => {
  return [stateValue]
    .map((v) => v?.trim())
    .filter((v) => v !== "")
    .filter((v) => !isUndefined(v))
    .map((value) => {
      const data = { name: dataName, value };
      const label = { name: labelName, value };
      return { data, label };
    });
};

const parseSingleBooleanToQueryTipProps = (
  stateValue: boolean | undefined,
  dataName: string,
  labelName: string
): QueryTipProps[] => {
  return [stateValue]
    .filter((v) => v)
    .map((v) => {
      const data = { name: dataName, value: "TRUE" };
      const label = { name: labelName, value: "TRUE" };
      return { data, label };
    });
};

const parseDateRangeToQueryTipProps = (
  range: SearchDateRange | undefined,
  dataName: string,
  labelName: string
): QueryTipProps | null => {
  if (!range) return null;
  const { start, end } = range;
  const data = { name: dataName, value: `${start}_${end}` };
  const label = { name: labelName, value: `${start} | ${end}` };
  return { data, label };
};

export const __QUERY_LISTS_TEST__ = { parseQueryStateToTipList };
