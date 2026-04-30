import { ReactiveList } from "@appbaseio/reactivesearch";
import { FC } from "react";
import { REACTIVE_SEARCH_PROPS_REACT } from "@/components/search/Conditions.tsx";
import { Pagination } from "@/components/ui/result/Pagination.tsx";
import { SearchResultCard } from "@/components/ui/result/SearchResultCard.tsx";
import { SearchResultSkeleton } from "@/components/ui/result/SearchResultSkeleton.tsx";
import { useDbXrefsCounts } from "@/hooks/useDbXrefsCounts.ts";
import { ElasticSearchSource } from "@/types/api.ts";

const NoResults = () => {
  return (
    <div className="p-4">
      <h1 className="mb-3">No Results</h1>
      <p>There is no result</p>
    </div>
  );
};

const SearchResultList: FC<{ data: ElasticSearchSource[] }> = ({ data }) => {
  const { loading, countsMap } = useDbXrefsCounts(data);

  return (
    <ReactiveList.ResultListWrapper className="flex flex-col gap-4">
      {data.map((item: any) => (
        <SearchResultCard
          key={item._id}
          item={item}
          dbXrefsCounts={loading ? undefined : countsMap.get(`${item.type}:${item.identifier}`)}
        />
      ))}
    </ReactiveList.ResultListWrapper>
  );
};

export const Result = () => {
  return (
    <ReactiveList
      componentId="list"
      dataField="identifier,isPartOf,type,organism.name,datePublished"
      excludeFields={["dbXrefs"]}
      size={10}
      renderNoResults={() => <NoResults />}
      pagination
      showEndPage
      renderPagination={(opts) => {
        return (
          <Pagination
            current={opts.currentPage + 1}
            total={opts.totalPages}
            setPage={opts.setPage}
          />
        );
      }}
      react={REACTIVE_SEARCH_PROPS_REACT}
      renderResultStats={(stats) => {
        const total: number = stats.numberOfResults;
        const completeTimeInfo = `Completed searching in ${stats.time} ms`;
        const countInfo = `Found ${total >= 10000 ? "more than " : ""}${stats.numberOfResults} entries`;

        return (
          <span className={"mb-2 text-sm"}>
            {countInfo} / {completeTimeInfo}
          </span>
        );
      }}
    >
      {({ data, loading }) =>
        loading ? <SearchResultSkeleton /> : <SearchResultList data={data} />
      }
    </ReactiveList>
  );
};
