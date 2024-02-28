import {
  DataSearch,
  DateRange,
  SelectedFilters,
  SingleList,
  ToggleButton,
} from "@appbaseio/reactivesearch";
import { endOfDay, format, startOfDay } from "date-fns";
import { FC } from "react";
import { useIntl } from "react-intl";

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

export const Conditions: FC = () => {
  const intl = useIntl();
  return (
    <div className="flex flex-col gap-4">
      <DataSearch
        componentId="query"
        dataField={[
          "search",
          "identifier",
          "title",
          "description",
          "name",
          "type",
          "url",
          "sameAs.*",
          "isPartOf",
          "status",
          "visibility",
        ]}
        defaultQuery={() => {
          return {
            _source: {
              includes: ["*"],
              excludes: [
                "url",
                "sameAs",
                "dbXrefs",
                "properties",
                "search",
                "distribution",
                "downloadUrl",
                "status",
                "visibility",
                "dateCreated",
                "dateModified",
              ],
            },
          };
        }}
        title={intl.formatMessage({ id: "search.search_keyword" })}
        filterLabel={intl.formatMessage({ id: "search.search_keyword" })}
        fieldWeights={[1, 3, 3, 3, 3, 3, 3]}
        autosuggest={false}
        showFilter
        URLParams
        queryFormat="and"
        fuzziness="AUTO"
        debounce={100}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <ToggleButton
        componentId="isPartOf"
        dataField="isPartOf"
        title={intl.formatMessage({ id: "search.select_part_of" })}
        filterLabel={intl.formatMessage({ id: "search.select_part_of" })}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
        data={[
          { label: "JGA", value: "jga" },
          { label: "BIOPROJECT", value: "bioproject" },
          { label: "BIOSAMPLE", value: "biosample" },
          { label: "SRA", value: "sra" },
        ]}
      />
      <SingleList
        componentId="type"
        dataField="type.keyword"
        title={intl.formatMessage({ id: "search.select_type" })}
        filterLabel={intl.formatMessage({ id: "search.select_type" })}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <SingleList
        componentId="organism"
        dataField="organism.name.keyword"
        title={intl.formatMessage({ id: "search.select_organism" })}
        filterLabel={intl.formatMessage({ id: "search.select_organism" })}
        URLParams
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <DateRange
        componentId="datePublished"
        dataField="datePublished"
        title={intl.formatMessage({ id: "search.select_published_date" })}
        filterLabel={intl.formatMessage({ id: "search.select_published_date" })}
        URLParams
        customQuery={dateRangeCustomQuery}
        react={REACTIVE_SEARCH_PROPS_REACT}
      />
      <SelectedFilters />
    </div>
  );
};
