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

const queryCustomQuery = (value: any, props: any) => {
  if (!value) return undefined;

  console.log(value)

  return {
    query: {
      bool: {
        should: [
          {
            multi_match: {
              query: value,
              fields: ["title", "description", "name"],
              type: "cross_fields",
              operator: "and"
            }
          },
          {
            multi_match: {
              query: value,
              fields: ["title", "description", "name"],
              type: "phrase",
              operator: "and"
            }
          },
          {
            multi_match: {
              query: value,
              fields: ["title", "description", "name"],
              type: "phrase_prefix",
              operator: "and"
            }
          },
          {
            term: { "identifier": value }
          },
          {
            term: { "identifier.keyword": value }
          },
        ],
        minimum_should_match: 1
      }
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
        ]}
        title={"Keyword"}
        filterLabel={"Keyword"}
        autosuggest={false}
        showFilter
        URLParams
        queryFormat="and"
        fuzziness="AUTO"
        debounce={100}
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
