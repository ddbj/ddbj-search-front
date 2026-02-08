import {
  DataSearch,
  DateRange,
  SelectedFilters,
  SingleList,
  ToggleButton,
} from "@appbaseio/reactivesearch";
import { endOfDay, format, startOfDay } from "date-fns";
import { FC } from "react";

const REACTIVE_SEARCH_PROPS_REACT = Object.freeze({
  and: ["query", "isPartOf", "type", "organism", "datePublished"],
});

const dateRangeCustomQuery = (value: any, props: any) => {
  if (!value) return undefined;

  const range: any = {};
  range[props.dataField] = {};
  if (value?.start)
    range[props.dataField].gte = format(
      startOfDay(new Date(value.start)),
      "yyyy-MM-dd'T'HH:mm:ssxxx"
    );
  if (value?.end)
    range[props.dataField].lte = format(endOfDay(new Date(value.end)), "yyyy-MM-dd'T'HH:mm:ssxxx");

  const query = { bool: { must: [{ bool: { must: [{ range }] } }] } };
  return { query };
};

// text 型フィールド（analyzed）のみ。keyword 型は cross_fields に混ぜられないため別クエリにする
const SEARCH_TEXT_FIELDS = ["title^3", "name^2", "description^0.5"];

const queryCustomQuery = (value: any) => {
  if (!value) return undefined;
  const trimmed = String(value).trim();
  if (!trimmed) return undefined;

  return {
    query: {
      bool: {
        should: [
          // identifier: keyword 型 — 完全一致（最優先）
          { term: { identifier: { value: trimmed, boost: 10 } } },
          // identifier: keyword 型 — 前方一致（accession の部分入力に対応）
          { prefix: { identifier: { value: trimmed, boost: 5 } } },
          // organism.name: keyword 型 — 完全一致
          { term: { "organism.name": { value: trimmed, boost: 2 } } },
          // title: フレーズ一致ボーナス（語順が一致すれば高スコア）
          { match_phrase: { title: { query: trimmed, boost: 5 } } },
          // text フィールド横断検索（全キーワードがいずれかのフィールドに存在すれば一致）
          {
            multi_match: {
              query: trimmed,
              fields: SEARCH_TEXT_FIELDS,
              type: "cross_fields",
              operator: "and",
            },
          },
          // text フィールド: フレーズ一致（語順一致ボーナス）
          {
            multi_match: {
              query: trimmed,
              fields: SEARCH_TEXT_FIELDS,
              type: "phrase",
            },
          },
          // text フィールド: 前方一致（入力途中の部分一致に対応）
          {
            multi_match: {
              query: trimmed,
              fields: SEARCH_TEXT_FIELDS,
              type: "phrase_prefix",
            },
          },
        ],
        minimum_should_match: 1,
      },
    },
  };
};

export const Conditions: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <DataSearch
        componentId="query"
        dataField={[
          "identifier",
          "title",
          "description",
          "name",
          "organism.name",
        ]}
        title={"Keyword"}
        filterLabel={"Keyword"}
        autosuggest={false}
        showFilter
        URLParams
        queryFormat="and"
        debounce={300}
        customQuery={queryCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <ToggleButton
        componentId="isPartOf"
        dataField="isPartOf"
        title={"Database"}
        filterLabel={"Database"}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
        data={[
          { label: "JGA", value: "jga" },
          { label: "BioProject", value: "BioProject" },
          { label: "BioSample", value: "BioSample" },
          { label: "SRA", value: "sra" },
        ]}
      />
      <SingleList
        componentId="type"
        dataField="type"
        title={"Type"}
        filterLabel={"Type"}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
      />

      <SingleList
        componentId="organism"
        dataField="organism.name"
        title={"Organism"}
        filterLabel={"Organism"}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      {/*<SingleList*/}
      {/*  componentId="visibility"*/}
      {/*  dataField="visibility.keyword"*/}
      {/*  title={"Visibility"}*/}
      {/*  filterLabel={"Visibility"}*/}
      {/*  URLParams*/}
      {/*  showSearch={false}*/}
      {/*  react={REACTIVE_SEARCH_PROPS_REACT}*/}
      {/*/>*/}
      <DateRange
        componentId="datePublished"
        dataField="datePublished"
        title={"Published Date"}
        filterLabel={"Published Date"}
        URLParams
        customQuery={dateRangeCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <SelectedFilters />
    </div>
  );
};
