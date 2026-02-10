import clsx from "clsx";
import { isUndefined } from "is-what";
import { type ComponentProps, type FC } from "react";
import { string } from "zod";
import { getDbLabel } from "@/consts/db.ts";
import { QueryTip } from "@/features/searchResult/queryBuilder/premitives/QueryTip.tsx";
import type { UpdateSearchFunctions } from "@/features/searchResult/queryBuilder/hooks/useUpdateSearchFunctions.ts";
import type { AnySearchParams, AnySearchParamsKey } from "@/schema/search/any.ts";

type Props = {
  removeParamFunc: UpdateSearchFunctions["removeParam"];
  searchParams: AnySearchParams;
};

const tipWrapperClasses = clsx("flex flex-wrap gap-2");

export const QueryTipList: FC<Props> = ({ searchParams, removeParamFunc }) => {
  const tipData = parseQueryStateToTipList(searchParams);

  if (tipData.length === 0) {
    return <></>;
  }

  return (
    <div className={"flex flex-col gap-1"}>
      <h3>Queries:</h3>
      <div className={tipWrapperClasses}>
        {tipData.map(({ label, data }) => (
          <QueryTip
            key={`${data.name}:${data.value}`}
            label={label}
            data={data}
            onClickRemove={removeParamFunc}
          />
        ))}
      </div>
    </div>
  );
};

type QueryTipProps = Omit<ComponentProps<typeof QueryTip>, "onClickRemove">;
const parseQueryStateToTipList = (state: AnySearchParams): QueryTipProps[] => {
  const keywords: QueryTipProps[] = (state.keywords ?? [])
    .map((t) => t.trim())
    .filter((t) => t !== "")
    .map((t) => {
      const data = { name: "keywords", value: t } as const;
      const label = { name: "Keyword", value: t };
      return { data, label };
    });
  const types: QueryTipProps[] = (state.types ?? []).map((value) => {
    const data = { name: "types", value } as const;
    const label = { name: "Type", value: getDbLabel(value) };
    return { data, label };
  });
  const dates: QueryTipProps[] = [
    ...parseDateRangeToQueryTipProps(
      [state.datePublishedFrom, state.datePublishedTo],
      ["datePublishedFrom", "datePublishedTo"],
      "Published"
    ),
    ...parseDateRangeToQueryTipProps(
      [state.dateModifiedFrom, state.dateModifiedTo],
      ["dateModifiedFrom", "dateModifiedTo"],
      "Modified"
    ),
  ].filter((v) => !!v);
  //todo make date QueryTips
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

const parseDateRangeToQueryTipProps = (
  stateValues: [string | undefined, string | undefined],
  dataNames: [AnySearchParamsKey, AnySearchParamsKey],
  labelName: string
): QueryTipProps[] => {
  return [stateValues]
    .filter(([from, to]) => from && to)
    .filter(([from, to]) => from !== "" && to !== "")
    .map(([from, to]) => {
      const data = { name: dataNames, value: `${from} | ${to}` };
      const label = { name: labelName, value: `${from} | ${to}` };
      return { data, label };
    });
};

const parseSingleStringToQueryTipProps = (
  stateValue: string | undefined,
  dataName: AnySearchParamsKey,
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
  dataName: AnySearchParamsKey,
  labelName: string
): QueryTipProps[] => {
  return [stateValue]
    .filter((v) => v)
    .map((v) => {
      const data = { name: dataName, value: "true" };
      const label = { name: labelName, value: "true" };
      return { data, label };
    });
};

export const __QUERY_LISTS_TEST__ = { parseQueryStateToTipList };
