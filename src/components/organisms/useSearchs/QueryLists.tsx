import { useNavigate, useSearch } from "@tanstack/react-router";
import clsx from "clsx";
import { QueryTip } from "@/components/morecules/QueryTip.tsx";
import { routeTree } from "@/routeTree.gen.ts";
import { removeFromSearch } from "@/utils/search.ts";
import type {
  DateRangeSchemaType,
  GeneralSearchSchemaType,
  SearchSchemaType,
} from "@/schema/search.ts";
import type { ComponentProps, FC } from "react";

type Props = {};

const tipWrapperClasses = clsx("flex flex-wrap gap-2");

export const QueryLists: FC<Props> = () => {
  const searchParams = useSearch({ strict: false });
  const tipData = parseQueryStateToTipList(searchParams);
  const navigate = useNavigate();

  //todo set name type properly
  const onClickRemove = (name: string, value: string) => {
    const from = routeTree.fullPath;
    const replace = true;
    const search = removeFromSearch(searchParams, name, value);
    navigate({ from, search, replace });
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
const parseQueryStateToTipList = (state: SearchSchemaType): QueryTipProps[] => {
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
  const organization: QueryTipProps[] = [state.organization]
    .filter((v) => !!v?.trim())
    .map((value) => {
      const data = { name: "organization", value };
      const label = { name: "Organization", value };
      return { data, label };
    });
  const publication: QueryTipProps[] = [state.publication]
    .filter((v) => !!v?.trim())
    .map((value) => {
      const data = { name: "publication", value };
      const label = { name: "Publication", value };
      return { data, label };
    });
  const grant: QueryTipProps[] = [state.grant]
    .filter((v) => !!v?.trim())
    .map((value) => {
      const data = { name: "grant", value };
      const label = { name: "Grant", value };
      return { data, label };
    });
  const result: QueryTipProps[] = [
    ...keywords,
    ...types,
    ...dates,
    ...organization,
    ...publication,
    ...grant,
  ];

  return result;
};

const parseDateRangeToQueryTipProps = (
  range: DateRangeSchemaType | undefined,
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
