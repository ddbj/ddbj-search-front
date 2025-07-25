import { useNavigate, useSearch } from "@tanstack/react-router";
import { type FC, useMemo } from "react";
import { DateRangePicker } from "@/components/morecules/DateRangePicker.tsx";
import { routeTree } from "@/routeTree.gen.ts";
import { type DateRange, dateRangeDataToString, dateRangeStringToData } from "@/utils/date.ts";
import type { SearchBase } from "@/schema/search.ts";

type Props = {};

const wrapperClasses = "flex flex-col gap-4";

export const DateSelector: FC<Props> = () => {
  const searchParams = useSearch({ strict: false });
  const { datePublished, dateUpdated } = searchParams;
  const navigate = useNavigate();
  //
  const uiPublished: DateRange | null = useMemo(() => {
    return datePublished ? dateRangeStringToData(datePublished) : null;
  }, [datePublished]);
  const uiUpdated: DateRange | null = useMemo(() => {
    return dateUpdated ? dateRangeStringToData(dateUpdated) : null;
  }, [dateUpdated]);
  const onChangePublished = (v: DateRange | null) => {
    const from = routeTree.fullPath;
    const replace = true;
    const datePublished: SearchBase["datePublished"] = v ? dateRangeDataToString(v) : undefined;
    const search: SearchBase = { ...searchParams, datePublished };
    navigate({ from, search, replace });
  };
  const onChangeUpdated = (v: DateRange | null) => {
    const from = routeTree.fullPath;
    const replace = true;
    const dateUpdated: SearchBase["datePublished"] = v ? dateRangeDataToString(v) : undefined;
    const search: SearchBase = { ...searchParams, dateUpdated };
    navigate({ from, search, replace });
  };
  return (
    <div className={wrapperClasses}>
      <DateRangePicker label={"Published Date"} value={uiPublished} onChange={onChangePublished} />
      <DateRangePicker label={"Updated Date"} value={uiUpdated} onChange={onChangeUpdated} />
    </div>
  );
};
